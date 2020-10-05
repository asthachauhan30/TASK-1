const SHA256=require('crypto-js/sha256');
class Blockchain{
    constructor(height,time,body,previousblockhash=" "){
        this.height=height;
        this.time=time;
        this.body=body;
        this.previousblockhash=previousblockhash;
        this.hash=" ";
    }
    calculateHash(){
        return SHA256(this.height+this.time+this.previousblockhash+ JSON.stringify(this.body)).toString();

    }
    class Blockchain{
        constructor()
        {
            this.chain=[this.createGenesisBLOCK()];
        }
        createGenesisBlock(){
            return new BLOCK(1325438,1529001822,[],"0");
        }
        getLatestBlock(){
            return this.chain(this.chain.length -1);

        }
        addBlock(newBlock){
            newBlock.previousblockhash=this.getLatestBlock().hash;
            newBlock.hash=newBlock.calculateHash();
            this.chain.push(newBlock);

        }
        isChainValid(){
            for(let i=1;i<this.chain.length;i++)
            {
                const currentBlock = this.chain[i];
                const previousBlock = this.chain[i-1];
                if(currentBlock.hash!=currentBlock.calculateHash()){
                    return false;
                }


            }
            return true;

        }
    }
let astha=new Blockchain();
astha.addBlock(new Blockchain(5.8,"01/01/2020","my nam is astha chauhan",{amount =4.9}));
console.log(JSON.stringify(astha,null,4));
console.log('is valid?'=astha.isChainValid());
astha.chain[i].data={amount:100};
astha.chain[i].hash=astha.chain[i].calculateHash();
    console.log('is valid?'=astha.isChainValid());