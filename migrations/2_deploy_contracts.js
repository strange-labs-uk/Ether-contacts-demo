var ConvertLib = artifacts.require("./ConvertLib.sol");
var People = artifacts.require("./People.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, People);
  deployer.deploy(People);
};
