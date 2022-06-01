module.exports = async function ({ deployments, getNamedAccounts }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("AutomatedVaultController", {
    from: deployer,
    // if set it to true, will not attempt to deploy
    // even if the contract deployed under the same name is different
    skipIfAlreadyDeployed: true,
    log: true,
    waitConfirmations: 1,
  });
};

module.exports.tags = ["AutomatedVaultController"];
