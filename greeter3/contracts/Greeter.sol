//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract Greeter {
	function greet() external pure returns(string memory) {
		return "Hello, World!"; 
	}
}
