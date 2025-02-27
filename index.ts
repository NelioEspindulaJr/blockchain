import CryptoBlock from "./crypto";
import CryptoBlockchain from "./crypto-blockchain";

let smashingCoin = new CryptoBlockchain();
smashingCoin.addNewBlock(
  new CryptoBlock(
    1,
    new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    {
      sender: "Nélio Espíndula Junior",
      recipient: "Nicolas Gomes",
      quantity: 50,
    }
  )
);
smashingCoin.addNewBlock(
  new CryptoBlock(
    2,
    new Date(new Date().getTime() + 86400000).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    { sender: "Nicolas Gomes", recipient: "Érika Rocha", quantity: 100 }
  )
);
console.log(JSON.stringify(smashingCoin, null, 4));
