import React from "react";
import { BlogList, BlogContainer, Header } from "./components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Router>
          <Routes>
              <Route path="/" element={<Navigate to="/author/all" />} />
              <Route path="/author/:id" element={<BlogList />} />
              <Route path="/:id" element={<BlogContainer />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
