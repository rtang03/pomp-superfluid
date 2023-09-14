import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";
import "hardhat-spdx-license-identifier";
import "hardhat-abi-exporter";
import { type HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
        details: { yul: false }
      }
    },
    compilers: [{ version: "0.8.17" }]
  },
  networks: {
    hardhat: {
      blockGasLimit: 100_000_000,
      allowUnlimitedContractSize: true
    }
    // goerli: {
    //     url: process.env.GOERLI_URL || "",
    //     accounts: {
    //         mnemonic: process.env.MNEMONIC || "",
    //         initialIndex: 0,
    //         count: 10
    //     }
    // }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD"
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 50000000 // setting it very high so testing doesn't complain
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: false,
    spacing: 2,
    runOnCompile: true
  }
};

export default config;
