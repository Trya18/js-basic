//  versi JS
const message = "Hello, World!";

// versi TS
const message2: string = "Hello, World!";
//contoh error TS
//const message3: string = 42;


//===================SPRING BUILT IN METHODS===================
const name: string = "Budi world";
const name2: string = "ucok";

console.log(name.toLocaleLowerCase()); // Output: budi
console.log(name.toLocaleUpperCase()); // Output: BUDI
console.log(name.replace("B", "P")); // Output: Pudi
console.log(name.replaceAll("B", "P")); // Output: Pudi
console.log(name.split("")); // Output: ['B', 'u', 'd', 'i']
console.log(name.split(" ")); // Output: ['Budi', 'world']
console.log(name.concat(" ")); // Output: Budi world
console.log(name.concat(" ").concat(name2)); // Output: Budi world ucok
console.log(name + name2); // Output: Budi worlducok
console.log(name + " " + name2); // Output: Budi world ucok
console.log(name.slice(1)); // Output: udi world
console.log(name.slice(1, 5)); // Output: udi
console.log(name.slice(6, 9)); // Output: wor

// ===================TEMPLATE LITERALS===================
const welcome: string = "Hello";
const nama: string = "Budi";

console.log(welcome + " " + nama);
console.log(`${welcome} ${nama}`);

// ====================NUMBER BUILT IN METHOD=================
const angka: string = "4000";

console.log(Number(angka)); // Output: 4000
console.log(parseInt(angka)); // Output: 4000
console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // Output: 5e-324

// ====================STRING CONVERSION======================
const angka2: string = "4000";

console.log(String(angka2)); // Output: "4000"
console.log(angka2.toString()); // Output: "4000"

// ====================BOOLEAN BUILT IN METHOD=================

console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean("hello")); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean(" ")); // Output: true
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean([])); // Output: true
console.log(Boolean({})); // Output: true  

// ====================DATE =================
const now: Date = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

console.log(now);

// =======================BASIC OPERATOR===================

/*
+ -> pertambahan
- -> Pengurangan
* -> perkalian
/ -> pembagian
% -> modulo (sisa pembagian) digunakan ketika mencari ganjil genap
** -> Pangkat 
*/

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(8 / 2);
console.log(9 % 2);
console.log(3 ** 2);


// =======================MODIFY IN PLACE=======================

let n: number = 4;

// n = n + 2;
n += 2;

console.log(n);

// ===========================INCREMENT & DECREMENT=================
let counter: number = 3;

counter++; //increment
counter--; // decrement

console.log(counter);

//==================POSTFIC=X & PREFIX==============
let counter2: number = 2;

console.log(counter2++); //postfix
// console.log(++counter2); // prefixx

//==========COMPARISON OPERATOR================
/* 
    ==
    ===
    <
    >
    <=
    >=
*/
// console.log(2 == "2");// pengecekan di value saja
// console.log(2 === "2");//pengecekan di value dan tipe data
console.log(2 < 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(5 >= 5);
console.log(5 <= 5);


//========MATH============
//math ceil -> membulatkan angka ke atas
console.log(Math.ceil(4.2));

//math floor --> membulatkan angka kebawah
console.log(Math.floor(4.7));

//math round --> membulatkan angka kebilanganbulat terdekat
console.log(Math.round(4.7));
console.log(Math.round(4.2));

// math max --> mengembalikan angka terbesar dari sekupulan angka
console.log(Math.max(10, 18, 32, 98, 2, 4, 76));

// math min --> mengembalikan angka terkecil dari sekumpulan angka 
console.log(Math.min(10, 18, 32, 98, 2, 4, 76));

//math abs --> menghilangkan tanda negatif
console.log(Math.abs(-200));

//math random --> menghasilkan angka acak
console.log(Math.random());

//math random --> menghasilkan angka acak
console.log(Math.floor(Math.random() * 100) + 1);

console.log("hello");
