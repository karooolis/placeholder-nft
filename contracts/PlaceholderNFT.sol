// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract PlaceholderNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Placeholder NFT", "PNFT") {}

    function mint(uint256 count) public {
        for (uint256 i; i < count; i++) {
            // Get the current tokenId, this starts at 0.
            uint256 newItemId = _tokenIds.current();

            // Mint the NFT to the sender using msg.sender.
            _safeMint(msg.sender, newItemId);

            // Set the NFTs data.
            _setTokenURI(newItemId, "ipfs://QmNhpRGxpDwHiQ1R5ajJo3uFLd6mVBJDytsqXeUDHQwW9x");

            // Increment the counter for when the next NFT is minted.
            _tokenIds.increment();
        }
    }
}
