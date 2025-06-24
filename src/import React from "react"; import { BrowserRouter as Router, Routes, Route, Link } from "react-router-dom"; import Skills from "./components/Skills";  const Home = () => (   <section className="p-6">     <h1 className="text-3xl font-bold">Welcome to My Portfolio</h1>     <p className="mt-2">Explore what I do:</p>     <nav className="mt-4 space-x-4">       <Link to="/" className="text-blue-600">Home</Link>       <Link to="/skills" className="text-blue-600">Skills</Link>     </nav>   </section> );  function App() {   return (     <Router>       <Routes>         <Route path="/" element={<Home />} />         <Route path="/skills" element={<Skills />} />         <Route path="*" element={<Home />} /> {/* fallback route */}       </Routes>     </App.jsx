import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Skills from "./components/Skills";

const Home = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
    <p className="mt-2">Explore what I do:</p>
    <nav className="mt-4 space-x-4">
      <Link to="/" className="text-blue-600">Home</Link>
      <Link to="/skills" className="text-blue-600">Skills</Link>
    </nav>
  </section>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<Home />} /> {/* fallback route */}
      </Routes>
    </Router>
  );
}

export default App;
