import CryptoBlock from "./crypto";

export default class CryptoBlockchain {
  blockchain: CryptoBlock[];
  difficulty: number = 4;

  constructor() {
    this.blockchain = [this.startGenesisBlock()];
  }

  private startGenesisBlock() {
    return new CryptoBlock(0, "26/02/2025", "Initial Block in the Chain", "0");
  }

  public obtainLatestBlock() {
    return this.blockchain[this.blockchain.length - 1];
  }

  public addNewBlock(newBlock: CryptoBlock) {
    newBlock.precedingHash = this.obtainLatestBlock().hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
  }

  public checkChainValidity() {
    for (let i = 1; i < this.blockchain.length; i++) {
      const currentBlock = this.blockchain[i];
      const precedingBlock = this.blockchain[i - 1];

      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }

      if (currentBlock.precedingHash !== precedingBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
