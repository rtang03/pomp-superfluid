const fs = require("fs");

const contractPath1 = `artifacts/contracts/Distributor.sol/Distributor.json`;
const obj1 = JSON.parse(fs.readFileSync(contractPath1).toString());
const size1 = Buffer.byteLength(obj1.deployedBytecode, "utf8") / 2;

console.log("Distributor contract size is", size1);

const contractPath2 = `artifacts/contracts/DistributorProxy.sol/DistributorProxy.json`;
const obj2 = JSON.parse(fs.readFileSync(contractPath2).toString());
const size2 = Buffer.byteLength(obj2.deployedBytecode, "utf8") / 2;

console.log("DistributorProxy contract size is", size2);
