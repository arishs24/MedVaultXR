import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [reminders, setReminders] = useState([]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out");
        } catch (err) {
            console.error("Error logging out:", err);
        }
    };

    useEffect(() => {
        const fetchReminders = async () => {
            const querySnapshot = await getDocs(collection(db, "reminders"));
            setReminders(querySnapshot.docs.map((doc) => doc.data()));
        };

        fetchReminders();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f0f4f8",
                padding: "20px",
                fontFamily: "'Roboto', sans-serif",
            }}
        >
            {/* Header */}
            <div
                style={{
                    backgroundColor: "#007BFF",
                    color: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    marginBottom: "30px",
                    textAlign: "center",
                    width: "100%",
                    maxWidth: "800px",
                }}
            >
                <h1>Welcome, {user?.email}</h1>
                <button
                    onClick={handleLogout}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#FF5252",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                        marginTop: "10px",
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Reminders Section */}
            <div
                style={{
                    width: "100%",
                    maxWidth: "800px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                }}
            >
                <h2 style={{ marginBottom: "15px", color: "#333" }}>
                    Your Reminders
                </h2>
                {reminders.length === 0 ? (
                    <p
                        style={{
                            color: "#888",
                            textAlign: "center",
                            marginTop: "20px",
                        }}
                    >
                        No reminders added yet.
                    </p>
                ) : (
                    <ul
                        style={{
                            listStyleType: "none",
                            padding: "0",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        {reminders.map((reminder, index) => (
                            <li
                                key={index}
                                style={{
                                    background: "#f9f9f9",
                                    padding: "15px",
                                    borderRadius: "8px",
                                    border: "1px solid #ddd",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                                }}
                            >
                                <span style={{ fontSize: "16px" }}>
                                    {reminder.text}
                                </span>
                                <button
                                    style={{
                                        backgroundColor: "#FF5252",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        padding: "5px 10px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() =>
                                        console.log("Edit reminder logic here")
                                    }
                                >
                                    Edit
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
