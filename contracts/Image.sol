pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";

// written in Solidity
// interaction with Contracts with JavaScript
// run "truffle console" -> Image.deployed() -> truffle test

contract Image is ERC721Full {
    constructor () ERC721Full("Image", "IMAGE") public {
}

// build out a mint function
// allow the person who owns the token, to issue new ones - mint new tokens
// each token has a specific ID
// create a new token with a new Image

// !! should be set to owner, not public !!
function mint(string memory _image) public {
  // Require unique Image
  // Image - add it
  // call the mint function
  // Image - track it
}
}
