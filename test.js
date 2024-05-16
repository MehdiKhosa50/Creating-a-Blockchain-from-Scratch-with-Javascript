const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
const previousHash = "fghjkhjghfcgdxcfhgjvhkjl";
const noncePro = 200000;
const currentBlockHash = [ 
    {
        amount: 11000,
        sender: "Mehdi11",
        Reciver: "Mehdi11",
    },
    {
        amount: 20000,
        sender: "Mehdi2",
        Reciver: "Mehdi2",
    }
];
console.log(bitcoin.createHashBlock(previousHash,currentBlockHash,noncePro));