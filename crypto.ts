import sha256 from "crypto-js/sha256";

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
        return sha256(
            this.index +
            this.precedingHash +
            this.timestamp +
            JSON.stringify(this.data)
        ).toString();
    }
}
