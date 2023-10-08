const hre = require("hardhat");

async function main() {
  const MakeNFT = await hre.ethers.getContractFactory("MakeNFT");
  const makeNFT = await MakeNFT.deploy();

  await makeNFT.deployed();

  console.log(
    `MakeNFT deployed to ${makeNFT.address}`
  );
  //0x84C5D124CF95FE73A9220625922c92a552464312
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
