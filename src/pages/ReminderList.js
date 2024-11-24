import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "../firebase";

const ReminderList = () => {
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        const fetchReminders = async () => {
            try {
                const user = auth.currentUser;
                if (!user) return;

                const q = query(
                    collection(db, "reminders"),
                    where("userId", "==", user.uid)
                );
                const querySnapshot = await getDocs(q);
                const remindersData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setReminders(remindersData);
            } catch (err) {
                console.error("Error fetching reminders:", err);
            }
        };

        fetchReminders();
    }, []);

    return (
        <div>
            <h2>Your Medication Reminders</h2>
            <ul>
                {reminders.map((reminder) => (
        <li
        key={reminder.id}
        style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            margin: "10px 0",
            backgroundColor: "#f9f9f9",
        }}
    >
        <strong>{reminder.medicine}</strong> - {reminder.dosage} at{" "}
        {new Date(reminder.time.seconds * 1000).toLocaleString()}
        {reminder.notes && <p style={{ color: "#666" }}>{reminder.notes}</p>}
    </li>
))}
</ul>
        </div>
    );
};

export default ReminderList;
