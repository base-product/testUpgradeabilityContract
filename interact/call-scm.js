import { ethers } from 'ethers';

/*

//https://docs.alchemy.com/docs/interacting-with-a-smart-contract

import depositWithdrawBnbAbi from 'src/config/abi/depositWithdrawBnb.json';

const bscProvider= "https://data-seed-prebsc-1-s1.binance.org:8545"

export const getSigner = async () => {
    const privateKey = ''
    const connection = new ethers.providers.JsonRpcProvider(getENV().bscProvider);

    const wallet = new ethers.Wallet(privateKey);
    const signer = wallet.connect(connection);
    return signer;
};

const getContract = (abi, address, signer) => {
    const signerOrProvider = signer ?? simpleRpcProvider;
    return new ethers.Contract(address, abi, signerOrProvider);
};

export const getABCContract = signer => {
    const contractAddress = getENV().fitAddress;
    return getContract(bep20Abi, contractAddress, signer);
};

const handleTransferToken = async () =>
    const signer = await getSigner();
    const contract = getShoeBoxContract(signer);

    const sender = walletAddress;
    const tx = await contract.transferFrom(sender, recipient, nftId);
    await tx.wait();
};
*/
