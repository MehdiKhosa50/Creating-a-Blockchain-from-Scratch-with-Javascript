const sha256 = require("sha256");
function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];

}
Blockchain.prototype.createNewBlock = function(nonce,prevHash,hash){
    const newBlock = {
        nonce: nonce,
        prevHash: prevHash,
        hash: hash,
        index: this.chain.length+1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
    };
    this.pendingTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}
Blockchain.prototype.getLastBlock = function(){
    return this.chain[this.chain.length-1];
}
Blockchain.prototype.createNewTransactions = function(amount,sender,reciver){
    var newTransactions={
        amount: amount,
        sender: sender,
        reciver: reciver,
    };
    this.pendingTransactions.push(newTransactions);
    return this.getLastBlock()['index'+1];
}
Blockchain.prototype.createHashBlock = function(previousHash,currentBlockHash,nonce){
    const dataAsString = previousHash+nonce.toString()+JSON.stringify(currentBlockHash);
    const hash = sha256(dataAsString);
    return hash;
}
module.exports = Blockchain;