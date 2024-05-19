const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const {v4 : uuidv4} =require('uuid');
const nodeAddress = uuidv4().split('-').join();

const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

app.get('/createNewBlock', function (req, res) {
  res.send(bitcoin);
});

app.post('/createNewTransaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransactions(req.body.amount, req.body.sender, req.body.receiver);
    res.json({ note: `The new transaction has been added to block ${blockIndex}` });
});

app.get('/mine' , function(req,res){
  const lastblock = bitcoin.getLastBlock();
  const previousBlockHash = lastblock['hash'];
  const currentBlockHash = {
    transactions: bitcoin.pendingTransactions,
    index: lastblock.index+1
  }
  const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockHash);
  const blockHash = bitcoin.createHashBlock(previousBlockHash,currentBlockHash,nonce);
  const newBlock = bitcoin.createNewBlock(nonce,previousBlockHash,blockHash);
  res.json({
    note: "The new Block has been Mined Successfully!",
    block: newBlock
  });


});

app.listen(3000,function(){
    console.log("Server is Running");
});