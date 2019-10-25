const path = require("path");

module.exports = {
  compilers: {
    solc: {
      version: "0.5.2"
    }
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  
  networks: {
    development: {
      network_id: "*",
      host: 'localhost',
      port: 8545
    }
  }
};
