const express = require('express');
const router = express.Router();

// Mock prescription database
const prescriptions = { 'valid-prescription-id': true };

router.post('/verify', (req, res) => {
    const { qrData } = req.body;
    const isValid = prescriptions[qrData] || false;
    res.json({ valid: isValid });
});

module.exports = router;
