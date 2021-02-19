const { expect } = require('chai');

describe('Greeter', function () {
	it('has been deployed successfully', async function () {
		//truffle
		//const greeter = await GreeterContract.deployed();
		//assert(greeter, "contract was not deployed");

		//hardhat
		//const Greeter = await ethers.getContractFactory("Greeter");
		//const greeter = await Greeter.deploy("Hello, world!");
		//await greeter.deployed();
		//expect(await greeter.greet()).to.equal("Hello, world!");

		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy();
		assert(greeter, 'contract was not deployed');
	});
	
	

	it("returns 'Hello, World!'", async () => {
		const Greeter = await ethers.getContractFactory('Greeter');
		const greeter = await Greeter.deploy();
		assert(greeter, 'contract was not deployed');
		
		const expected = 'Hello, World!';
		const actual = await greeter.greet();
		assert.equal(actual, expected, "greeted with 'Hello, World!'");
	});
});