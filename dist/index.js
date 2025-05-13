"use strict";
const fruits = [
    { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
    { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
    { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
    { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
    { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
    { fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
    { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];
// Fungsi untuk mendapatkan nama-nama buah
function getFruitNames(fruits) {
    return fruits.map((fruit) => fruit.fruitName);
}
// Menampilkan hasil
const fruitNames = getFruitNames(fruits);
console.log("Daftar Buah Yang Dimiliki Andi Adalah :");
console.log(fruitNames);
console.log("-".repeat(70));
// Fungsi untuk mengelompokkan buah berdasarkan tipe
function groupFruitsByType(fruits) {
    const grouped = {};
    // Mengelompokkan buah berdasarkan fruitType
    fruits.forEach((fruit) => {
        if (!grouped[fruit.fruitType]) {
            grouped[fruit.fruitType] = [];
        }
        grouped[fruit.fruitType].push(fruit.fruitName);
    });
    return grouped;
}
// Fungsi untuk menghitung jumlah wadah dan kelompok buah di masing-masing wadah
function getFruitTypesAndWadah(fruits) {
    const groupedFruits = groupFruitsByType(fruits);
    const jumlahWadah = Object.keys(groupedFruits).length;
    return {
        jumlahWadah,
        wadah: groupedFruits,
    };
}
// Menampilkan hasil
const result = getFruitTypesAndWadah(fruits);
console.log(`Jumlah wadah yang dibutuhkan: ${result.jumlahWadah}`);
console.log("Daftar buah di masing-masing wadah:");
console.log(result.wadah);
console.log("-".repeat(70));
// menjawab soal ke tiga
// Fungsi untuk menghitung total stock berdasarkan tipe buah
function getTotalStockByType(fruits) {
    const stockByType = {};
    // Mengelompokkan buah berdasarkan tipe dan menghitung total stoknya
    fruits.forEach((fruit) => {
        if (!stockByType[fruit.fruitType]) {
            stockByType[fruit.fruitType] = 0;
        }
        stockByType[fruit.fruitType] += fruit.stock;
    });
    return stockByType;
}
// Mendapatkan total stock berdasarkan tipe
const totalStock = getTotalStockByType(fruits);
// Menampilkan hasil dengan console.log
console.log("Total stock untuk setiap tipe buah:");
console.log(`IMPORT: ${totalStock.IMPORT}`);
console.log(`LOCAL: ${totalStock.LOCAL}`);
console.log("-".repeat(70));
// 4
// Fungsi untuk memberikan komentar berdasarkan kasus yang ditemukan
function getComments(fruits) {
    const comments = [];
    // 1. Mengidentifikasi apakah ada duplikasi nama buah dengan huruf kapital yang berbeda
    const fruitNames = fruits.map((fruit) => fruit.fruitName.toLowerCase());
    const uniqueFruitNames = new Set(fruitNames);
    if (fruitNames.length !== uniqueFruitNames.size) {
        comments.push("Perhatian: Ada duplikasi nama buah dengan huruf kapital yang berbeda (misalnya, 'Apel' dan 'apel').");
    }
    // 2. Menyebutkan adanya pengelompokan berdasarkan tipe buah
    const fruitTypes = new Set(fruits.map((fruit) => fruit.fruitType));
    if (fruitTypes.size > 1) {
        comments.push("Buah telah dipisahkan menjadi beberapa wadah berdasarkan tipe: 'IMPORT' dan 'LOCAL'.");
    }
    // 3. Memperhatikan penggunaan `fruitId` yang sama untuk beberapa buah
    const fruitIdCounts = fruits.reduce((acc, fruit) => {
        acc[fruit.fruitId] = (acc[fruit.fruitId] || 0) + 1;
        return acc;
    }, {});
    // Menggunakan `for...in` untuk iterasi objek
    for (const id in fruitIdCounts) {
        if (fruitIdCounts.hasOwnProperty(id)) {
            const count = fruitIdCounts[id];
            if (count > 1) {
                comments.push(`Perhatian: Ada beberapa buah dengan 'fruitId' yang sama (ID: ${id}).`);
            }
        }
    }
    // 4. Memperhatikan stok buah yang sangat tinggi pada beberapa buah
    const highStockFruit = fruits.filter((fruit) => fruit.stock > 100);
    if (highStockFruit.length > 0) {
        comments.push("Perhatian: Beberapa buah memiliki stok yang sangat tinggi, seperti 'Salak' dengan stok 150.");
    }
    return comments;
}
// Menampilkan komentar terkait data buah
const comments = getComments(fruits);
console.log("Komentar terkait data buah:");
comments.forEach((comment) => console.log(comment));
