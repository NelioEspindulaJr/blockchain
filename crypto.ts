var SHA256 = require("crypto-js/sha256");

export default class CryptoBlock {
  // It’s a unique number that tracks the position of every block in the entire blockchain.
  index: any;
  // It keeps a record of the time of occurrence of each completed transaction.
  timestamp: any;
  // It provides data about the completed transactions, such as the sender details, recipient’s details, and quantity transacted.
  data: any;
  // It points to the hash of the preceding block in the blockchain, something important in maintaining the blockchain’s integrity.
  precedingHash: string;
  // Hash of the block based on its properties
  hash: any;
  // A number that helps in the mining process
  nonce: number = 0;

  constructor(
    index: number,
    timestamp: string,
    data: any,
    precedingHash: string = " "
  ) {
    this.data = data;
    this.index = index;
    this.timestamp = timestamp;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
  }

  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  public proofOfWork(difficulty: number) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}
