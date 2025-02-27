# NodeJS - Blockchain

With this project i have made a crypto currency using basic and common knowledge of blockchain by following the steps on [this](https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/) article.

## About the code

The code is actually very simple and easy to understand. I've created two classes that consist in: `CryptoBlock` and `CryptoBlockchain`. The most vital part of the CryptoBlock is his hash, whom is builted by computing the data that we want store in our blockchain.

Why the hash is so important? Because is with him that we can verify the Integrity of the CryptoBlock and assure the blockchain reliable security by always verifying if the new block has the previous block hash stored inside him.

Of course, this is just an example of how to use blockchain, and i've made it only for learning purposes, this structure isn't reliable (or even compatible) for the market needs and specifications.

## Running the code

If you trying to execute this code, you must:

1. Run `npm i` to install some packages;
2. Execute the build script in the terminal, by typing: `npm run build`;
3. And at least, you can run the compiled code by using `npm start`.
