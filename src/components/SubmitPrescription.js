import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function SubmitPrescription() {
    const [prescription, setPrescription] = useState("");

    const handleSubmit = async () => {
        try {
            await addDoc(collection(db, "prescriptions"), {
                prescription,
                status: "Pending",
            });
            alert("Prescription submitted!");
        } catch (err) {
            alert("Error submitting prescription: " + err.message);
        }
    };

    return (
        <div>
            <h2>Submit Prescription</h2>
            <textarea
                placeholder="Enter prescription details"
                value={prescription}
                onChange={(e) => setPrescription(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default SubmitPrescription;
