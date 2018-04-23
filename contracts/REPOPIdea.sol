pragma solidity ^0.4.22;

contract REPOPUsernames{

  mapping (address => string) private addressToUsername;

  function setUsernameByAddress(string _name) public {
    addressToUsername[msg.sender] = _name;
  }

  function getUsernameByAddress(address userAddress) external view returns(string) {
      return addressToUsername[userAddress];
  }
}
