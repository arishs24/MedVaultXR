import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Signup successful! You can now log in.");
            setEmail("");
            setPassword("");
        } catch (err) {
            setError("Error signing up: " + err.message);
        }
    };

    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "#f4f4f9",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "30px",
                    width: "100%",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                    Create an Account
                </h2>
                {error && (
                    <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
                        {error}
                    </p>
                )}
                {success && (
                    <p style={{ color: "green", fontSize: "14px", marginBottom: "10px" }}>
                        {success}
                    </p>
                )}
                <form onSubmit={handleSignup}>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontSize: "16px",
                            }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: "15px" }}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                fontSize: "16px",
                            }}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            fontSize: "16px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
                    >
                        Signup
                    </button>
                </form>
                <p style={{ marginTop: "15px", fontSize: "14px", color: "#555" }}>
                    Already have an account?{" "}
                    <a
                        href="/login"
                        style={{
                            color: "#007BFF",
                            textDecoration: "none",
                            fontWeight: "bold",
                        }}
                    >
                        Log in here
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Signup;