import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

function ReviewPrescriptions() {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const fetchPrescriptions = async () => {
            const querySnapshot = await getDocs(collection(db, "prescriptions"));
            setPrescriptions(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        };
        fetchPrescriptions();
    }, []);

    const handleUpdate = async (id, status) => {
        const prescriptionDoc = doc(db, "prescriptions", id);
        await updateDoc(prescriptionDoc, { status });
        alert(`Prescription ${status}`);
    };

    return (
        <div>
            <h2>Review Prescriptions</h2>
            {prescriptions.map((p) => (
                <div key={p.id}>
                    <p>{p.prescription}</p>
                    <p>Status: {p.status}</p>
                    <button onClick={() => handleUpdate(p.id, "Approved")}>Approve</button>
                    <button onClick={() => handleUpdate(p.id, "Rejected")}>Reject</button>
                </div>
            ))}
        </div>
    );
}

export default ReviewPrescriptions;
