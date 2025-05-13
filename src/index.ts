import {
  fruits,
  getFruitNames,
  getFruitTypesAndWadah,
  getTotalStockByType,
  getComments,
} from "./data/buah";

import { comments, countAllComments, printComments } from "./data/comment";

console.log("🍎 Daftar Buah Yang Dimiliki Andi:");
console.log(getFruitNames(fruits));
console.log("-".repeat(70));

const result = getFruitTypesAndWadah(fruits);
console.log(`Jumlah wadah: ${result.jumlahWadah}`);
console.log("Wadah:", result.wadah);
console.log("-".repeat(70));

const totalStock = getTotalStockByType(fruits);
console.log("Total stock tiap tipe:");
console.log(`IMPORT: ${totalStock.IMPORT}`);
console.log(`LOCAL: ${totalStock.LOCAL}`);
console.log("-".repeat(70));

console.log("📌 Komentar terkait data buah:");
getComments(fruits).forEach((c: string) => console.log(c));
console.log("-".repeat(70));

console.log("🗨️ Struktur komentar:");
printComments(comments);
console.log("Total komentar:", countAllComments(comments));
