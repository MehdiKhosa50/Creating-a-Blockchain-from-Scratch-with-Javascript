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

module.exports = Blockchain;