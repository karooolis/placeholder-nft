// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  // const lockedAmount = hre.ethers.utils.parseEther("1");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  // await lock.deployed();

  // console.log(
  //   `Lock with 1 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  const MyContract = await hre.ethers.getContractFactory(
    "PlaceholderNFTERC721"
  );
  const contract = await MyContract.attach(
    "0x7Df920991Fb8cBE4A16d8Ad64F13B090b7b9a1F8" // The deployed contract address
  );

  // console.log(contract);

  const TransferFilter = contract.filters.Transfer();
  const events = await contract.queryFilter(TransferFilter);

  console.log(events);

  // contract
  //   .getLogs(
  //     "Transfer",
  //     {
  //       // filter: {
  //       //   myIndexedParam: [20, 23],
  //       //   myOtherIndexedParam: "0x123456789...",
  //       // }, // Using an array means OR: e.g. 20 or 23
  //       fromBlock: 0,
  //       toBlock: "latest",
  //     },
  //     function (error, events) {
  //       console.log(events);
  //     }
  //   )
  //   .then(function (events) {
  //     console.log(events); // same results as the optional callback above
  //   });

  console.log("hiii");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
