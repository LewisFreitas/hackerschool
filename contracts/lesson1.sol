pragma solidity ^0.4.21;

contract Hackerschool{

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
