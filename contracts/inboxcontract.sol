pragma solidity ^0.4.17;

contract InboxContract {

    string public message;

    function InboxContract(string initialMessage) public {
        message = initialMessage;
    }
    function setMessage(string newMessgae) public {
        message = newMessgae;
    }
}