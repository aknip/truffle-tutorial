pragma solidity >=0.4.0 <0.6.0;

contract HelloWorld {
    event log_string(bytes32 log); // Event
    
    function () external { // Fallback Function
        emit log_string("Hello World!!!");
    }
}