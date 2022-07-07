pragma solidity ^0.8.4;

// https://github.com/chiru-labs/ERC721A/blob/main/contracts/ERC721A.sol
// https://chiru-labs.github.io/ERC721A/#/erc721a?id=_mint
import "erc721a/contracts/ERC721A.sol";

contract PlaceholderNFT_ERC721A is ERC721A {
    constructor() ERC721A("Placeholder NFT", "PNFT") {}

    function mint(uint256 quantity) external payable {
        _mint(msg.sender, quantity);
    }
}