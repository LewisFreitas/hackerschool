pragma solidity ^0.4.21;

contract Hackerschool{

    event ChangedColor(uint8 oldColor, uint8 newColor);

    uint8 private backgroundColorId;

    function Hackerschool() public {
        backgroundColorId = 1;
    }

    function getBackgroundColor() public view returns(uint8){
        return backgroundColorId;
    }

    function setBackgroundColor(uint8 _colorId) external{
      uint8 oldColor = backgroundColorId;
      backgroundColorId = _colorId;
      emit ChangedColor(oldColor, _colorId);
    }
}
