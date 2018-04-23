pragma solidity ^0.4.21;

contract Ownable {
  address public owner;

  function Ownable() public{
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  function transferOwnership(address newOwner) public onlyOwner {
    if (newOwner != address(0)) {
      owner = newOwner;
    }
  }
}

contract Hackerschool is Ownable{

    uint8 private backgroundColorId;

    function Hackerschool() public {
        backgroundColorId = 1;
    }

    function getBackgroundColor() public view returns(uint8){
        return backgroundColorId;
    }

    function setBackgroundColor(uint8 _colorId) external onlyOwner{
        backgroundColorId = _colorId;
    }
}
