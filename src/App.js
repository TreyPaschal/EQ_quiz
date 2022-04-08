import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Switch, Link } from "react-router-dom";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Reset from "./components/auth/reset";
import Dashboard from "./components/dashboard/dashboard";
import MyComponent from "./components/test/test";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
     
      <Router>
      <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/test" element={<MyComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
