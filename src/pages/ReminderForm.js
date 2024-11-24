import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "../firebase";

const ReminderForm = () => {
    const [medicine, setMedicine] = useState("");
    const [dosage, setDosage] = useState("");
    const [time, setTime] = useState("");
    const [notes, setNotes] = useState("");

    const handleAddReminder = async (e) => {
        e.preventDefault();
        try {
            const user = auth.currentUser;
            if (!user) throw new Error("User not logged in!");

            await addDoc(collection(db, "reminders"), {
                userId: user.uid,
                medicine,
                dosage,
                time: new Date(time),
                notes,
            });
            alert("Reminder added successfully!");
            setMedicine("");
            setDosage("");
            setTime("");
            setNotes("");
        } catch (err) {
            console.error("Error adding reminder:", err);
        }
    };

    return (
        <form onSubmit={handleAddReminder} style={{ textAlign: "center" }}>
            <h2>Add Medication Reminder</h2>
            <input
                type="text"
                placeholder="Medicine Name"
                value={medicine}
                onChange={(e) => setMedicine(e.target.value)}
            />
            <input
                type="text"
                placeholder="Dosage"
                value={dosage}
                onChange={(e) => setDosage(e.target.value)}
            />
            <input
                type="datetime-local"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />
            <textarea
                placeholder="Notes (optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            <button type="submit">Add Reminder</button>
        </form>
    );
};

export default ReminderForm;
