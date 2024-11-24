import React from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // Update to QRCodeCanvas or QRCodeSVG

function QRGenerator({ value }) {
    return (
        <div>
            <QRCodeCanvas value={value || 'Default QR Code'} />
        </div>
    );
}

export default QRGenerator;
