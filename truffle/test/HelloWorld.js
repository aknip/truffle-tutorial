const HelloWorld = artifacts.require("./HelloWorld.sol");

contract("HelloWorld", accounts => {
    it("deploys successfully", async () => {
        const helloWorld = await HelloWorld.deployed();
        
		
		const address = await helloWorld.address
		assert.notEqual(address, 0x0)
		assert.notEqual(address, '')
		assert.notEqual(address, null)
		assert.notEqual(address, undefined)
		
        
    });
});