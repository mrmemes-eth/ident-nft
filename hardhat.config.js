require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("process");

require("./tasks/faucet");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const HARMONY_PRIVATE_KEY = process.env["HARMONY_PRIVATE_KEY"];
const HARDHAT_NETWORK_ID = process.env["HARDHAT_NETWORK_ID"];

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    testnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [`0x${HARMONY_PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://api.harmony.one`,
      accounts: [`0x${HARMONY_PRIVATE_KEY}`],
    },
  },
};
