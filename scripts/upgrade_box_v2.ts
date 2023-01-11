import { ethers, upgrades } from "hardhat";

const PROXY = "0xD480Ea8fBCb55Ff832Bf5Fd1cD5E698074D879C1";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const p = await upgrades.upgradeProxy(PROXY, BoxV2);
  await p.deployed();
  console.log("New logic smart contract", p.address);
}

main();
