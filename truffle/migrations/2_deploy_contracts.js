const MyStringStore = artifacts.require("MyStringStore");
const HelloWorld = artifacts.require("HelloWorld");

module.exports = function (deployer) {
    deployer.deploy(MyStringStore);
    deployer.deploy(HelloWorld);
};