// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {

    constructor() ERC20("Degen", "DGN") {}

    /**
     * @dev Mints new tokens and assigns them to the specified address.
     * Can only be called by the contract owner.
     */
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Transfers tokens from the sender's account to the specified account.
     * Overrides the transfer function in ERC20.sol.
     */
    function transfer(address to, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), to, amount);
        return true;
    }

    /**
     * @dev Redeems tokens from the sender's account by burning them.
     * The specified amount of tokens is destroyed and removed from circulation.
     */
    function redeem(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    /**
     * @dev Burns the specified amount of tokens from the sender's account.
     * The specified amount of tokens is destroyed and removed from circulation.
     */
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    /**
     * @dev Returns the balance of the specified account.
     * Overrides the balanceOf function in ERC20.sol.
     */
    function balanceOf(address account) public view override returns (uint256) {
        return super.balanceOf(account);
    }
}

