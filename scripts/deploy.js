// This is a script for deploying your contracts. You can adapt it to deploy

const { ethers, artifacts } = require("hardhat");
const process = require("process");

// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Token address:", token.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles("Token", token);

  const NFTPassFactory = await ethers.getContractFactory("NFTPass");
  const NFTPass = await NFTPassFactory.deploy();
  [owner, addr1, ...addrs] = await ethers.getSigners();
  await NFTPass.deployed();

  console.log("NFTPass contract deployed to address:", NFTPass.address);

  // Mint an NFTPass to the HARMONY_OWNER_WALLET
  const txn = await NFTPass.mintNFTPass(process.env["HARMONY_OWNER_WALLET"]);
  await txn.wait();

  const supply = await NFTPass.totalSupply();
  console.log("Total Supply after initial mint: %s", supply);

  saveFrontendFiles("NFTPass", NFTPass);
}

function saveFrontendFiles(name, token) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../frontend/src/contracts";
  const contractsFile = contractsDir + "/contract-address.json";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  if (!fs.existsSync(contractsFile)) {
    fs.writeFileSync(contractsFile, "{}");
  }

  const contractsData = JSON.parse(fs.readFileSync(contractsFile));
  contractsData[name] = token.address;

  fs.writeFileSync(contractsFile, JSON.stringify(contractsData, undefined, 2));

  const TokenArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + "/" + name + ".json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
