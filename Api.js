const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/createNewBlock', function (req, res) {
  res.send(bitcoin);
});
app.post('/createNewTransaction', function (req, res) {
    const blockIndex = bitcoin.createNewTransactions(req.body.amount, req.body.sender, req.body.receiver);
    res.json({ note: `The new transaction has been added to block ${blockIndex}` });
});

app.listen(3000,function(){
    console.log("Server is Running");
});