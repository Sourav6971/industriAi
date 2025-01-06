import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Model from "./components/Model";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/model" element={<Model />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
