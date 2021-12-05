//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTPass is Ownable, ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721 ("NFTPass", "Pass") {
    console.log("NFTPass contract.");
  }

  function mintNFTPass() public returns (uint256) {
    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();
    _safeMint(msg.sender, newItemId);

    console.log("Minting NFTPass[%s] to Recipient: %s", newItemId, msg.sender);
    return newItemId;
  }

  function send(address recipient, uint256 tokenId) public {
    safeTransferFrom(ownerOf(tokenId), recipient, tokenId);
  }
}