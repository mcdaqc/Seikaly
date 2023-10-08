// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MakeNFT is ERC721URIStorage, ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    uint256 public constant MAX_SUPPLY = 1000000;
    uint256 public constant MINT_PRICE = 0.001 ether;

    constructor() public ERC721("SEIKA", "SKY") {
        _tokenIds.increment();
    }

    function safeMint(address to, string memory uri) public payable {
        require(msg.value >= MINT_PRICE, 'El valor de la transaccion no es suficiente');
        require(totalSupply() < MAX_SUPPLY, "Se alcanzo el suministro maximo");

        uint256 tokenId = _tokenIds.current(); 
        
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        _tokenIds.increment();
    }

    function withdrawPayments() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
