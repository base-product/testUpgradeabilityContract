const DAILogic1 = artifacts.require('DAILogic1');

const DAILogic2 = artifacts.require('DAILogic2');

const DAIProxy = artifacts.require('DAIProxy');
const DAIProxyAdmin = artifacts.require('DAIProxyAdmin');

module.exports = async function(deployer) {
    // deployment steps
    deployer.deploy(DAIProxyAdmin);

    // let dai = await DAILogic1.at('0xf7f8DF719Bb7a5f6Aa11F14fC5b15F7085c9bAc0');
    // let data = await dai.contract.methods.initialize('DAI', 'DAI').encodeABI();
    // console.log(data)
    // deployer.deploy(DAIProxy);
    // await deployer.deploy(DAIProxy,'0xf7f8DF719Bb7a5f6Aa11F14fC5b15F7085c9bAc0','0x2C92E5dD8d34160fEb9Eb3E88Fde0635dEa3EcFb');

    // deployer.deploy(DAIProxyAdmin);


    // deployer.deploy(DAILogic2);
};
