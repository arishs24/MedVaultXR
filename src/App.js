import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import QRScanner from "./pages/QRScanner";
import ARScene from "./pages/ARScene";
import Chatbot from "./pages/Chatbot"; // Import the Chatbot component

function App() {
    return (
        <Router>
            {/* Global Navbar */}
            <nav
                className="navbar navbar-expand-lg navbar-light bg-light"
                style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    padding: "10px 20px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div className="container-fluid">
                    <Link
                        className="navbar-brand"
                        to="/"
                        style={{
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                    >
                        MedVaultXR
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul
                            className="navbar-nav"
                            style={{
                                listStyleType: "none",
                                display: "flex",
                                gap: "20px",
                                margin: 0,
                                padding: 0,
                            }}
                        >
                            {[
                                { name: "Home", path: "/" },
                                { name: "Services", path: "/services" },
                                { name: "Contact", path: "/contact" },
                                { name: "Login", path: "/login" },
                                { name: "Signup", path: "/signup" },
                                { name: "QR Scanner", path: "/qr-scanner" },
                                { name: "AR Feature", path: "/ar" },
                                { name: "AI Chatbot", path: "/chatbot" }, // Added Chatbot link
                            ].map((item, index) => (
                                <li key={index} className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={item.path}
                                        style={{
                                            color: "white",
                                            textDecoration: "none",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/qr-scanner" element={<QRScanner />} />
                    <Route path="/ar" element={<ARScene />} />
                    <Route path="/chatbot" element={<Chatbot />} /> {/* Added Chatbot route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
