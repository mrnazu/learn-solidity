# Smart Contracts Overview
Smart contracts are digital contracts stored on a blockchain that are automatically executed when predetermined terms and conditions are met. 

Smart contracts work by following simple “if/when…then…” statements that are written into code on a blockchain. A network of computers executes the actions when predetermined conditions have been met and verified. These actions could include releasing funds to the appropriate parties, registering a vehicle, sending notifications, or issuing a ticket. The blockchain is then updated when the transaction is completed.

# What is Solidity?
Solidity is a programming language that looks similar to JavaScript, and it’s used only for making smart contracts.
- Smart contracts are like computer programs that run on the Ethereum Network. They work automatically and do specific things when people meet certain conditions.
- Solidity is built to work well with Ethereum, and it supports many useful features like object-oriented programming and events.
- The file extension for Solidity is `.sol`.
- Solidity provides several built-in types, including address, uint (unsigned integer), int (signed integer), bool (boolean), and byte (a fixed-size byte array).
- It allows for creating user-defined types, such as enums and structs.

Below is a simple Solidity smart contract code that defines a contract with a function to return the greeting "Hello, Nazu!":

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeting {
    function greet() public pure returns (string memory) {
        return "Hello, Nazu!";
    }
}
```

Explanation:

- `pragma solidity ^0.8.0;` In Solidity, the pragma directive is used to specify the version of the Solidity compiler that should be used to compile the smart contract code. It's essentially an instruction to the compiler about which version of the Solidity language the code is written in and how it should be compiled. The word "pragma" itself comes from "pragmatic," which means practical or dealing with things sensibly and realistically. 

- `contract Greeting { ... }`: This line defines a contract named `Greeting`. similar to a class in OOPs like Python or JS
- `function greet() public pure returns (string memory) { ... }`: This line declares a function named `greet`. 
  - `public` indicates that the function can be called from outside the contract.
  - `pure` indicates that the function does not read or modify the contract's state.
  - `returns (string memory)`: This specifies that the function returns a string.
  - `string memory`: This is the type of the return value, where `string` represents the data type for strings and `memory` indicates that the string should be stored in memory.
- `"Hello, Nazu!"`: This is the string that the `greet` function returns.

You can deploy this contract on the Ethereum blockchain using tools like Remix or Truffle, and then call the `greet` function to get the greeting "Hello, Nazu!" from the deployed contract.
