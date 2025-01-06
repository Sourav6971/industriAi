import joblib
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import PyPDF2

# Flask app setup
app = Flask(__name__)
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

class ESGPredictor:
    def __init__(self, model_path='esg_clustering_model.joblib'):
        """Initialize the predictor with saved model"""
        try:
            components = joblib.load(model_path)
            self.numeric_scaler = components['numeric_scaler']
            self.numeric_kmeans = components['numeric_kmeans']
            self.text_vectorizer = components['text_vectorizer']
            self.text_kmeans = components['text_kmeans']
        except Exception as e:
            print(f"Error loading model: {str(e)}")
            raise

    def predict_from_text(self, text):
        """Predict ESG cluster from text data"""
        if self.text_vectorizer is None or self.text_kmeans is None:
            raise ValueError("Text analysis models not available")

        try:
            # Transform text using loaded vectorizer
            text_features = self.text_vectorizer.transform([text.lower()])
            
            # Get cluster prediction
            cluster = self.text_kmeans.predict(text_features)[0]
            
            # Get feature importance
            feature_names = self.text_vectorizer.get_feature_names_out()
            feature_scores = dict(zip(feature_names, text_features.toarray()[0]))
            
            # Interpret ESG values
            esg_interpretation = self._interpret_esg_values(feature_scores, text.lower())
            
            # Return only ESG scores (no interpretation, no details)
            return {
                'esg_scores': esg_interpretation['scores']
            }
        
        except Exception as e:
            print(f"Error in text prediction: {str(e)}")
            return None

    def _interpret_esg_values(self, feature_scores, raw_text):
        """Interpret ESG values with balanced scoring"""
        esg_keywords = {
            'environmental': {
                'high_impact': ['emissions', 'carbon', 'renewable', 'sustainability'],
                'medium_impact': ['environmental', 'energy', 'waste', 'conservation'],
                'low_impact': ['green', 'water', 'recycling', 'eco']
            },
            'social': {
                'high_impact': ['diversity', 'health', 'safety', 'human rights'],
                'medium_impact': ['employee', 'community', 'training', 'welfare'],
                'low_impact': ['workforce', 'education', 'engagement', 'wellbeing']
            },
            'governance': {
                'high_impact': ['board', 'compliance', 'ethics', 'transparency'],
                'medium_impact': ['governance', 'risk', 'audit', 'accountability'],
                'low_impact': ['policy', 'disclosure', 'stakeholder', 'management']
            }
        }

        scores = {category: 0 for category in esg_keywords.keys()}
        
        weights = {
            'high_impact': 1.5,
            'medium_impact': 1.0,
            'low_impact': 0.5
        }
        
        for category, impact_groups in esg_keywords.items():
            category_score = 0
            
            for impact_level, keywords in impact_groups.items():
                for keyword in keywords:
                    tfidf_score = 0
                    for feature, score in feature_scores.items():
                        if keyword in feature.lower() and score > 0:
                            tfidf_score = max(tfidf_score, score)
                    
                    keyword_count = raw_text.count(keyword)
                    
                    if tfidf_score > 0 or keyword_count > 0:
                        keyword_score = (tfidf_score * 0.6 + min(keyword_count, 3) * 0.4) * weights[impact_level]
                        category_score += keyword_score
            
            scores[category] = max(category_score, 1e-2)
        
        total_weight = sum(weights.values()) * 4
        scores = {
            category: min(100, (score / total_weight) * 100)
            for category, score in scores.items()
        }
        
        return {
            'scores': scores
        }

def extract_text_from_pdf(file_path):
    """Extract text content from a PDF file"""
    text = ""
    try:
        with open(file_path, 'rb') as f:
            reader = PyPDF2.PdfReader(f)
            for page in reader.pages:
                text += page.extract_text()
    except Exception as e:
        print(f"Error reading PDF: {str(e)}")
    return text

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    if file:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], secure_filename(file.filename))
        file.save(file_path)
        
        text = extract_text_from_pdf(file_path)
        if not text.strip():
            return jsonify({'error': 'Unable to extract text from the PDF'}), 400

        predictor = ESGPredictor()
        result = predictor.predict_from_text(text)
        if result:
            return jsonify(result)
        else:
            return jsonify({'error': 'Prediction failed'}), 500

if __name__ == '__main__':
    app.run(debug=True)
