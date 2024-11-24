// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PrescriptionRegistry {
    struct Prescription {
        string id;
        string hash; // Hash of prescription details
        address issuer; // Pharmacist's address
    }

    mapping(string => Prescription) public prescriptions;

    event PrescriptionAdded(string id, address issuer);

    function addPrescription(string memory id, string memory hash) public {
        require(bytes(id).length > 0, "ID cannot be empty");
        require(bytes(hash).length > 0, "Hash cannot be empty");

        prescriptions[id] = Prescription(id, hash, msg.sender);

        emit PrescriptionAdded(id, msg.sender);
    }

    function verifyPrescription(string memory id, string memory hash) public view returns (bool) {
        Prescription memory presc = prescriptions[id];
        return keccak256(abi.encodePacked(presc.hash)) == keccak256(abi.encodePacked(hash));
    }
}
