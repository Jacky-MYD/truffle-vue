const Crowd = artifacts.require("Crowdfunding");

module.exports = function (deployer) {
  deployer.deploy(Crowd);
};
