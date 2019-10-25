pragma solidity ^0.5.0;

/// import "node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

contract SimpleStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
