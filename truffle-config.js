require('dotenv').config();

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
          'PHASES',
          'NODE_URL'
        );
      },
      gas: 6721975,
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
