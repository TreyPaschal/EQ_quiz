import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import Reset from "./reset";
import Dashboard from "./dashboard";
import MyComponent from "./test";
//import Add from "./add";

function App() {
  return (
    <div className="App">
      <Router>
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
