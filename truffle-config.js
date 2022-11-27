require('dotenv').config();
const mnemonic = process.env["MNEMONIC"];
// const privateKey = process.env["PRIVATE_KEY"];
var HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    // development: {
    //   host: '127.0.0.1',
    //   port: 8545,
    //   network_id: '*'
    // },
    bsctestnet: {
      provider: function () {
        return new HDWalletProvider(
            mnemonic,
          'https://data-seed-prebsc-1-s1.binance.org:8545'
        );
      },
      // gas: 50000000,
      network_id: 97,
    },

  },
  rpc: {
    host: 'localhost',
    post: 8080,
  },
  mocha: {
    useColors: true,
  },
  compilers: {
    solc: {
      version: '0.6.6',
    },
  },
};
