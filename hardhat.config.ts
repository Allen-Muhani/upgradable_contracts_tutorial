import { HardhatUserConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

import "@nomiclabs/hardhat-etherscan";
// import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
// import "solidity-coverage";
// import "hardhat-abi-exporter";
import "hardhat-celo";

const config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      chainId: 44787,
    },
  },
  etherscan: {
    apiKey: {
      alfajores: "P2NMSA6X7YIQ6MCQ1D5WSQ2QQNDC2QNHX8",
      celo: "P2NMSA6X7YIQ6MCQ1D5WSQ2QQNDC2QNHX8",
    },
  },
};

export default config;
