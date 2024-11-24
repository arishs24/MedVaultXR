import React, { useState } from "react";
import MedicationTracker from "../components/MedicationTracker";

function Services() {
    const [prescriptionFile, setPrescriptionFile] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setPrescriptionFile(file);
        alert("File uploaded successfully: " + file.name);
    };

    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                backgroundColor: "#f4f4f9",
                minHeight: "100vh",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "32px",
                    color: "#007BFF",
                    marginBottom: "20px",
                    fontWeight: "bold",
                }}
            >
                Our Services
            </h1>
            <ul
                style={{
                    listStyleType: "none",
                    padding: "0",
                    marginBottom: "30px",
                    maxWidth: "600px",
                    textAlign: "center",
                }}
            >
                {[
                    "Medication Tracking",
                    "Prescription Validation",
                    "Chronic Disease Management",
                ].map((service, index) => (
                    <li
                        key={index}
                        style={{
                            backgroundColor: "#ffffff",
                            margin: "10px 0",
                            padding: "15px 20px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#333",
                            transition: "transform 0.2s ease",
                            cursor: "pointer",
                        }}
                        onMouseOver={(e) =>
                            (e.target.style.transform = "scale(1.02)")
                        }
                        onMouseOut={(e) =>
                            (e.target.style.transform = "scale(1)")
                        }
                    >
                        {service}
                    </li>
                ))}
            </ul>

            <div
                style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "10px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    width: "100%",
                    maxWidth: "600px",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        fontSize: "24px",
                        color: "#007BFF",
                        marginBottom: "20px",
                        fontWeight: "bold",
                    }}
                >
                    Upload Prescription
                </h2>
                <input
                    type="file"
                    className="form-control"
                    style={{
                        marginBottom: "20px",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                    }}
                    onChange={handleFileUpload}
                />
                {prescriptionFile && (
                    <p
                        style={{
                            fontSize: "16px",
                            color: "#555",
                            marginTop: "10px",
                        }}
                    >
                        Uploaded: {prescriptionFile.name}
                    </p>
                )}
            </div>

            <div
                style={{
                    marginTop: "30px",
                    width: "100%",
                    maxWidth: "600px",
                }}
            >
                <MedicationTracker />
            </div>
        </div>
    );
}

export default Services;
