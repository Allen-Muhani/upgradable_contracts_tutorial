// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.10;

contract BoxV2 {
    uint public val;

    // function initialize(uint _val)  external () {
    //     val = _val;
    // }

    function inc() external {
        val += 1;
    }
}
