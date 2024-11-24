import { BrowserProvider, Contract } from "ethers";

const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with your contract address
const ABI = [
    {
        "inputs": [
            { "internalType": "string", "name": "id", "type": "string" },
            { "internalType": "string", "name": "hash", "type": "string" }
        ],
        "name": "addPrescription",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "string", "name": "id", "type": "string" },
            { "internalType": "string", "name": "hash", "type": "string" }
        ],
        "name": "verifyPrescription",
        "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
        "stateMutability": "view",
        "type": "function"
    }
];

export const getContract = async () => {
    if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum); // Updated to use BrowserProvider
        const signer = await provider.getSigner();
        return new Contract(CONTRACT_ADDRESS, ABI, signer);
    } else {
        throw new Error("Ethereum wallet not detected. Please install MetaMask.");
    }
};
