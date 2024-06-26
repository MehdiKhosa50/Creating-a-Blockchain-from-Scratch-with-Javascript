const sha256 = require("sha256");
function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
    this.createNewBlock(100000,"PreviousBlockHash","CurrentBlockHash");
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
    return this.getLastBlock().index + 1;
}
Blockchain.prototype.createHashBlock = function(previousBlockHash,currentBlockData,nonce){
    const dataAsString = previousBlockHash+nonce.toString()+JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}
Blockchain.prototype.proofOfWork = function(previousBlockHash,currentBlockData){
    let nonce = 0;
    let hash = this.createHashBlock(previousBlockHash,currentBlockData,nonce);
    while(hash.substring(0,4)!=='0000'){
        nonce++;
        hash = this.createHashBlock(previousBlockHash,currentBlockData,nonce);
        console.log(hash);
    }
    return nonce;
}
module.exports = Blockchain;