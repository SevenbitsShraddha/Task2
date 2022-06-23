const db =require('./db');
var Web3 = require('web3');
var provider = 'https://kovan.infura.io/v3/518603dccdad4fbab483d1d358b38767';
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);



 let interval =setInterval (async ()=>{

 latestBlock=await web3.eth.getBlockNumber()
 
  Block =await web3.eth.getBlock(latestBlock)
  console.log("Block",Block)

  if(Block.transactions.length >0){
  Block.transactions.forEach(async(transactionAddress) => {
      let t=await web3.eth.getTransaction(transactionAddress)
      //console.log(t)
   if(t != null){                         
     var toaddress = t.to;
     if(t.to != null){                     
       db.query("SELECT Address FROM Addresses WHERE Address= ?",[toaddress], function (err, result, fields) {
        db.on('error', function(err) {
          if(result.length){
          console.log("tx",result[0]);
            db.query(" INSERT INTO transaction(id, transaction_hash, fromAddress, toAddress, amount,Timestamp) VALUES(?,?,?,?,?,?)",[t.nonce, t.hash, t.from, toaddress,
               t.value,t.timestamp]);
          }
        
        });
          });
        }                                  
      }                                       
  })
  
 console.log(JSON.stringify(Block));
 console.log("block number :" ,latestBlock)
 db.query("INSERT INTO blocks(id, block_hash,parent_hash,Timestamp) VALUES(?,?,?,?)",[Block.number, Block.hash,Block.parentHash,Block.timestamp],function(err,result,fields){
    return;
 
});
  }
},5000);





