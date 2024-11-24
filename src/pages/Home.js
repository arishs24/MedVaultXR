import React from "react";

const Home = () => {
    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "#f4f4f9",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Main Content */}
            <main
                style={{
                    marginTop: "100px", // Add extra space to ensure it doesn't overlap with the global navbar
                    textAlign: "center",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "30px",
                    maxWidth: "600px",
                }}
            >
                <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>
                    Welcome to MedVaultXR
                </h2>
                <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
                    Delivering secure and remote pharmacy services with ease and reliability.
                    Explore our features, including AR-based tools, secure QR scanning, and
                    personalized medication management.
                </p>
            </main>
        </div>
    );
};

export default Home;
