const MyStringStore = artifacts.require("./MyStringStore.sol");

contract("MyStringStore", accounts => {

	before(async () => {
		this.myStringStore = await MyStringStore.deployed()
	})

	it('deploys successfully', async () => {
		const address = await this.myStringStore.address
		assert.notEqual(address, 0x0)
		assert.notEqual(address, '')
		assert.notEqual(address, null)
		assert.notEqual(address, undefined)
	})


    it("should store the string 'Hey there!'", async () => {        
        // Set myString to "Hey there!"
        await this.myStringStore.set("Hey there!", {from: accounts[0]});

        // Get myString from public variable getter
        const storedString = await this.myStringStore.myString.call();

        assert.equal(storedString, "Hey there!", "The string was not stored");
    });

    
});