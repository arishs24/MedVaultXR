import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const MedicationDashboard = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const fetchPrescriptions = async () => {
            const querySnapshot = await getDocs(collection(db, "prescriptions"));
            setPrescriptions(querySnapshot.docs.map((doc) => doc.data()));
        };
        fetchPrescriptions();
    }, []);

    return (
        <div>
            <h2>My Medications</h2>
            <ul>
                {prescriptions.map((med, index) => (
                    <li key={index}>
                        <strong>{med.name}</strong> - {med.dosage}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicationDashboard;
