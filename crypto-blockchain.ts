import CryptoBlock from "./crypto";

export default class CryptoBlockchain {
    blockchain: CryptoBlock[];

    constructor() {
        this.blockchain = [this.startGenesisBlock()];
    }

    private startGenesisBlock() {
        return new CryptoBlock(0, "01/01/2025", "Initial Block in the Chain", "0");
    }

    public obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }

    public addNewBlock(newBlock: CryptoBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
}