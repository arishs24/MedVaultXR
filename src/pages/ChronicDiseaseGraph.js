import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
    { date: "2024-11-20", glucose: 120 },
    { date: "2024-11-21", glucose: 130 },
    { date: "2024-11-22", glucose: 125 },
];

const ChronicDiseaseGraph = () => (
    <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="glucose" stroke="#8884d8" />
    </LineChart>
);

export default ChronicDiseaseGraph;
