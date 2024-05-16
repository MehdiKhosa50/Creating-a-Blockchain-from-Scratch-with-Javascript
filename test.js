const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(100,"ftgyhusijkiohuy","ftgyuhihygtfryg");
bitcoin.createNewBlock(100,"ftgyhusijkiohuy","ftgyuhihygtfryg");
bitcoin.createNewBlock(100,"ftgyhusijkiohuy","ftgyuhihygtfryg");
bitcoin.createNewTransactions(20000,"Mehdi","Mehdi");
bitcoin.createNewTransactions(40000,"Mehdi1","Mehdi1");
bitcoin.createNewTransactions(80000,"Mehdi2","Mehdi2");
bitcoin.createNewBlock(1,"NewBlockForPendingTranscations","NewBlockForPendingTranscations");
console.log(bitcoin.chain[3]);