console.log(document);

function testTheDom(){
    var nodes = document.getElementsByTagName("li");
    console.log(nodes);

    for (let node of nodes) {
        console.log(node.innerHTML);
        console.log(node.textContent);
    }
    var checkingNode=document.getElementById("checkingBalance");
    console.log(checkingNode);
    console.log(checkingNode.textContent);
    var balance=parseInt(checkingNode.textContent);
    console.log(balance);
    balance=balance+100;
    checkingNode.textContent=balance;

}