export const companyInfo = `
Introduction:
I'm your friendly GreenSphere chatbot, here to assist you to make smarter investment decisions with a focus on sustainability and positive impact. By combining Natural Language Processing (NLP), machine learning, and optimization techniques, I can guide you in maximizing ESG (Environmental, Social, and Governance) impact while balancing risk and budget constraints. Let’s explore responsible investment strategies together!

Details:
Stay connected with us for updates on:
- github: https://github.com/Sourav6971/industriAi.git

Our project follows a comprehensive, data-driven approach to evaluate and optimize investment strategies with ESG considerations. The workflow is designed to handle unstructured data and transform it into actionable investment insights, using both advanced machine learning techniques and Modern Portfolio Theory (MPT). The process is structured as follows:

Input Data and NLP Model:
Project reports, typically in PDF format, are processed using an NLP model, specifically a pre-trained BERT model from HuggingFace. The model extracts meaningful features from the text, including ESG-related keywords, trends, and project-specific metrics.

Feature Extraction and Weight Assignment:
Extracted features are assigned appropriate weights based on their relevance to ESG factors. This is combined with data collected from various sources, including government publications, non-governmental organizations (NGOs), and financial institutions, to build a comprehensive dataset for model training.

Regression Model for ESG Score Prediction:
A regression model (such as Random Forest) is trained using the curated data to predict ESG scores and calculate potential returns on investment (ROI) for each project. These predicted values form the basis for subsequent optimization.

ROI Calculations and Optimization:
Using ROI and ESG score predictions, we apply linear and mixed-integer programming with PuLP to maximize ESG impact. The optimization process respects budgetary constraints and predefined risk tolerance limits.

Modern Portfolio Theory (MPT) Application:
MPT principles are utilized to balance the trade-off between risk and return. The risk is modeled using a covariance matrix of project returns, while ESG impact is maximized within feasible investment boundaries.

Scenario Analysis for Investment Strategies:
Scenario analysis provides stakeholders with multiple investment strategy options. By adjusting budget levels, risk aversion parameters, and project prioritization criteria, the framework delivers customized portfolio recommendations.

Visualization of Results:
The final output includes visualizations of project rankings, ESG scores, and potential returns. These insights enable stakeholders to make data-informed decisions aligned with sustainability goals.

In summary, this project combines cutting-edge NLP, predictive modeling, and optimization to create a holistic ESG-focused investment framework. It empowers stakeholders to make sustainable investment choices with clarity and confidence, balancing profitability with positive societal and environmental outcomes.`;
