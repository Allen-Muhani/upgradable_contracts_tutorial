// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.10;

// https://www.youtube.com/watch?v=JgSj7IiE4jA
contract Box {

    uint public val;

    function initialize(uint _val)  external  {
        val = _val;
    }
}
