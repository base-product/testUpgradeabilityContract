const DAILogic1 = artifacts.require('DAILogic1');

module.exports = function(deployer) {
    // deployment steps
    deployer.deploy(DAILogic1);
};
