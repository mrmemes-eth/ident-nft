require("@nomiclabs/hardhat-waffle");
require("process");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const HARMONY_PRIVATE_KEY = process.env["HARMONY_PRIVATE_KEY"];

module.exports = {
  solidity: "0.7.3",
  networks: {
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
