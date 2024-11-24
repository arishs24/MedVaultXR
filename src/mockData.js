const mockPrescriptions = [
    { id: 'Prescription-1234', valid: true },
    { id: 'Prescription-5678', valid: false },
];

export const verifyPrescription = (id) => {
    const prescription = mockPrescriptions.find((item) => item.id === id);
    return prescription ? prescription.valid : false;
};
