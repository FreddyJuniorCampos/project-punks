const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account: ", deployer.address);

  const FreddyPunks = await ethers.getContractFactory("FreddyPunks");
  const deployed = await FreddyPunks.deploy(10000);

  console.log("Freddy Punks is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
