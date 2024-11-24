import React from "react";

function PharmacistDashboard() {
    return (
        <div>
            <h1>Pharmacist Dashboard</h1>
            <p>Manage prescriptions here.</p>
        </div>
    );
}

function PatientDashboard() {
    return (
        <div>
            <h1>Patient Dashboard</h1>
            <p>Submit and track your prescriptions here.</p>
        </div>
    );
}

export { PharmacistDashboard, PatientDashboard };
