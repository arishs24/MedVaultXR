
# MedVaultXR: Remote Pharmacy Services Platform

MedVaultXR is an innovative platform designed to help pharmacists deliver secure, remote pharmacy services. It combines AI-powered assistance, medication tracking, AR-based tools, and blockchain technology to improve accessibility, security, and patient care, especially in remote or underserved areas.

## Features
- **AI Chatbot**: Provides users with a conversational interface to answer questions about services, medications, and healthcare.
- **Medication Tracking**: Helps users monitor their medications with timely reminders and prescription verification.
- **Blockchain Integration**: Ensures prescription authenticity and security via blockchain verification.
- **Augmented Reality (AR) Feature**: Visualizes medications and healthcare information in an interactive AR experience.
- **QR Scanner**: Scans and verifies prescription QR codes for quick and accurate validation.
- **Firebase Integration**: Manages user authentication, data storage, and real-time updates.

## Setup and Installation

To set up the MedVaultXR project, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-repository/MedVaultXR.git
    cd MedVaultXR
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Firebase Setup**:
   - Sign up at [Firebase](https://firebase.google.com/).
   - Create a new project and copy the Firebase configuration credentials.
   - Replace the Firebase configuration in the `src/firebase.js` file with your credentials.

4. **Blockchain Setup**:
   - For the blockchain integration, ensure you have access to an Ethereum wallet like MetaMask.
   - Set up your smart contract with tools like Hardhat or Truffle for testing and deployment.
   - Update the `blockchain.js` file with your deployed contract address and ABI.

5. **Run the Development Server**:
    ```bash
    npm start
    ```
   - Navigate to `http://localhost:3000` to view the app in your browser.

## Scripts

Here are some of the useful commands for testing and deployment:

### Test the Smart Contracts:
```bash
npx hardhat test
```

### Start the Hardhat Node for local blockchain simulation:
```bash
npx hardhat node
```

### Deploy to a Testnet:
```bash
npx hardhat run scripts/deploy.js --network testnet
```

### Deploy using Hardhat Ignition (if using Ignition for deployments):
```bash
npx hardhat ignition deploy ./ignition/modules/YourModule.js
```

## Technologies Used
- **React**: Frontend framework for building the user interface.
- **Firebase**: For user authentication and database management.
- **Blockchain (Ethereum)**: Smart contracts for prescription verification and authentication.
- **Hardhat**: A development environment for deploying Ethereum contracts.
- **Augmented Reality**: AR tools for visualizing medications and other healthcare data.
- **AI (Groq)**: For the AI-powered chatbot that answers healthcare-related queries.

## Future Enhancements
- **Expand AI Chatbot Capabilities**: Improve the chatbot with machine learning for more personalized responses.
- **Further Blockchain Integrations**: Enhance blockchain features with tokenization for secure transactions and prescription records.
- **Mobile Application**: Adapt the platform for mobile use, enabling better accessibility for users on the go.

## License
MIT License.
