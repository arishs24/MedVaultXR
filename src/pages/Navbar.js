import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "#007bff", padding: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#fff" }}>
                <h1 style={{ margin: "0", paddingLeft: "15px" }}>MedVaultXR</h1>
                <ul style={{ listStyle: "none", display: "flex", margin: "0", padding: "0" }}>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/signup" style={{ color: "#fff", textDecoration: "none" }}>Signup</Link>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/qrscanner" style={{ color: "#fff", textDecoration: "none" }}>QR Scanner</Link>
                    </li>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/ar" style={{ color: "#fff", textDecoration: "none" }}>AR Feature</Link>
                    </li>
                    <li>
                    <Link to="/chatbot" style={{ color: "white", textDecoration: "none" }}>
                        AI Chatbot
                    </Link>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
