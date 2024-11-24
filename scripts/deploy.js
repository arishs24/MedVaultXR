const hre = require("hardhat");

async function main() {
    const PrescriptionRegistry = await hre.ethers.getContractFactory("PrescriptionRegistry");
    const registry = await PrescriptionRegistry.deploy();

    await registry.deployed();
    console.log("PrescriptionRegistry deployed to:", registry.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
