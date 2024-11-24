import React, { useState } from 'react';

function HealthTracker() {
    const [data, setData] = useState({ bloodPressure: '', glucose: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    return (
        <div>
            <h2>Chronic Disease Management</h2>
            <div>
                <label>Blood Pressure:</label>
                <input
                    type="text"
                    name="bloodPressure"
                    value={data.bloodPressure}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Glucose Levels:</label>
                <input
                    type="text"
                    name="glucose"
                    value={data.glucose}
                    onChange={handleInputChange}
                />
            </div>
        </div>
    );
}

export default HealthTracker;
