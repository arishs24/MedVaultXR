import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import QrReader from "react-qr-scanner";
import { getContract } from "../blockchain"; // Import the blockchain function

const QRScanner = () => {
    const [scannedData, setScannedData] = useState("No data scanned yet.");
    const [verificationStatus, setVerificationStatus] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to handle prescription verification
    const handleScan = async (result) => {
        if (result && result.text) {
            setScannedData(result.text);
            setVerificationStatus(""); // Reset status message
            setLoading(true);

            try {
                // 1. Blockchain Verification
                const contract = await getContract(); // Get the blockchain contract instance
                const hash = computeHash(result.text); // Placeholder for hash computation logic
                const blockchainVerified = await contract.verifyPrescription(result.text, hash);

                if (blockchainVerified) {
                    setVerificationStatus("✅ Blockchain Verified: Prescription is valid!");
                    return; // Exit if blockchain verification is successful
                }

                // 2. Firestore Verification (Fallback)
                const q = query(
                    collection(db, "prescriptions"),
                    where("id", "==", result.text)
                );
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0].data();
                    setVerificationStatus(
                        doc.verified
                            ? "✅ Firestore Verified: Prescription is valid!"
                            : "❌ Prescription is not valid."
                    );
                } else {
                    setVerificationStatus("⚠️ No matching prescription found.");
                }
            } catch (error) {
                console.error("Error verifying prescription:", error);
                setVerificationStatus("❌ Error verifying prescription. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    // Function to compute a hash (placeholder for actual logic)
    const computeHash = (data) => {
        // Replace with your hashing logic (e.g., SHA256)
        return "mock-hash-placeholder";
    };

    const handleError = (err) => {
        console.error("QR Scanner Error:", err);
    };

    return (
        <div
            style={{
                fontFamily: "'Roboto', sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>
                QR Code Verification
            </h2>
            <div
                style={{
                    width: "320px",
                    height: "240px",
                    marginBottom: "20px",
                    border: "2px solid #ccc",
                    borderRadius: "10px",
                    overflow: "hidden",
                }}
            >
                <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
                Scanned Data: <span style={{ fontWeight: "bold" }}>{scannedData}</span>
            </p>
            {loading ? (
                <p style={{ fontSize: "16px", color: "#007BFF" }}>Verifying...</p>
            ) : (
                <p style={{ fontSize: "16px", fontWeight: "bold", color: "#555" }}>
                    {verificationStatus}
                </p>
            )}
        </div>
    );
};

export default QRScanner;
