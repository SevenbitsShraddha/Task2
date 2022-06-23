const  db = require('./db')
const ethers = require('ethers')
const mnemonic = "language moon below order fabric box viable immense captain fabric aware ripple";
for(var i =1;i<=100;i++)
{
var k= "m/44'/60'/0'/0/"+i ;
var myNumber= k ;
var myString = myNumber.toString();
var wallet = ethers.Wallet.fromMnemonic(mnemonic,myString);
console.log('address:', wallet.address);
console.log('privateKey:', wallet.privateKey)
console.log('publicKey:', wallet.publicKey)
//db.query('insert into Addresses(Address,publickey,privatekey) values(?,?,?)',[wallet.address,wallet.publicKey,wallet.privateKey])
}


module.exports= node;