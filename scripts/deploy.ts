import { ethers } from "hardhat"
import { SishiswapRouter02__factory as SishiswapRouter02 } from "../typechain";

async function main() {

  const [deployer] = await ethers.getSigners();

  const sishiswapFactory = "0xaDDf2126B79B68D875FeE90Dd1561dD2795F5f4E"
  const wbnb = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";

  const SishiswapRouter02Deployed = await new SishiswapRouter02(deployer)
    .attach("0xFDcCBb9f04354bFc388691F2fc68E374970EBd8C")
    // .deploy(sishiswapFactory, wbnb)

  console.log("SishiswapRouter02Deployed", SishiswapRouter02Deployed.address)

  await hre.run("verify:verify", {
    address: SishiswapRouter02Deployed.address,
    constructorArguments: [sishiswapFactory, wbnb],
  })

  console.log("SishiswapRouter02 verifyed", `https://bscscan.com/address/${SishiswapRouter02Deployed.address}`)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
