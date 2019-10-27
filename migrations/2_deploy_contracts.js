// migration files put contracts on the blockchain
// #_ tells truffle in which order the contracts will be migrated

var Image = artifacts.require("./Image.sol");

module.exports = function(deployer) {
  deployer.deploy(Image);
};
