// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract PlaceholderNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string ima = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black'/> <text x='50%' y='40%' class='base' dominant-baseline='middle' text-anchor='middle'>Placeholder NFT</text><text x='50%' y='55%' class='base' dominant-baseline='middle' text-anchor='middle'>";

    constructor() ERC721("Placeholder NFT", "PNFT") {}

    function mint(uint256 quantity) public {
        for (uint256 i; i < quantity; i++) {
            // Get the current tokenId, this starts at 0.
            uint256 newItemId = _tokenIds.current();

            string memory combinedWord = string(abi.encodePacked("#", Strings.toString(newItemId)));
            // string memory finalSvg = string(abi.encodePacked(baseSvg, combinedWord, "</text></svg>"));

            // Get all the JSON metadata in place and base64 encode it.
            string memory json = Base64.encode(
                bytes(
                    string(
                        abi.encodePacked(
                            '{"name": "',
                            // We set the title of our NFT as the generated word.
                            combinedWord,
                            '", "description": "One out of many, not rare. ERC721.", "image": "data:image/svg+xml;base64,',
                            // We add data:image/svg+xml;base64 and then append our base64 encode our svg.
                            Base64.encode(bytes(finalSvg)),
                            '"}'
                        )
                    )
                )
            );

            // Just like before, we prepend data:application/json;base64, to our data.
            string memory finalTokenUri = string(
                abi.encodePacked("data:application/json;base64,", json)
            );

            // Mint the NFT to the sender using msg.sender.
            _safeMint(msg.sender, newItemId);

            // Set the NFTs data.
            _setTokenURI(newItemId, finalTokenUri);

            // Increment the counter for when the next NFT is minted.
            _tokenIds.increment();
        }
    }
}
