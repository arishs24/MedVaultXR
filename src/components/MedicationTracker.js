import React, { useState } from 'react';

function MedicationTracker() {
    const [medications, setMedications] = useState([]);
    const [newMedication, setNewMedication] = useState('');

    const handleAddMedication = () => {
        if (newMedication) {
            setMedications([...medications, newMedication]);
            setNewMedication('');
        }
    };

    const handleRemoveMedication = (med) => {
        setMedications(medications.filter((item) => item !== med));
    };

    return (
        <div>
            <h2>Medication Tracker</h2>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Add a medication"
                    value={newMedication}
                    onChange={(e) => setNewMedication(e.target.value)}
                />
                <button className="btn btn-success mt-2" onClick={handleAddMedication}>Add</button>
            </div>
            <ul className="list-group">
                {medications.map((med, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {med}
                        <button className="btn btn-danger btn-sm" onClick={() => handleRemoveMedication(med)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MedicationTracker;
