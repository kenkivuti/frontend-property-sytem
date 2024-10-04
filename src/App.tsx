import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./components/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SampleData from "./components/testchart";
import Admindashboard from "./pages/Admindashboard";
// import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/testchart" element={<SampleData />} />
          <Route path="/Admindashboard" element={<Admindashboard />} />

        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
