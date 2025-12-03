//  ======= IF STATEMENT =======
//  SYNTAX
/*
    if (condition) {
        code block
    }
        */

const age: number = 20;
if (age >= 17) {
  console.log("anda bisa buat KTP");
}

//  ======= ELSE STATEMENT =======
// Backup plan dari if statement

const age2: number = 10;
if (age2 >= 17) {
  console.log("anda bisa buat KTP");
} else {
  console.log("anda belum bisa buat KTP");
}

//  ======= ELSE IF STATEMENT =======

const grade: string = "B";

if (grade === "A") {
  console.log("Nilai Bagus");
} else if (grade === "B") {
  console.log("Nilai Cukup");
} else if (grade === "C") {
  console.log("Nilai buruk");
} else if (grade === "D") {
  console.log("Nilai tidak diketahui");
}

// ======== SWITCH CASE =======
/*  SYNTAX
switch (value){
    case "value1" :
    // add code here
    break;
    case "value2" :
    // add code here
    break;

*/

const day: string = "test";

switch (day) {
  case "senin":
    console.log("Hari Senin");
    break;
  case "selasa":
    console.log("Hari Selasa");
    break;
  case "rabu":
    console.log("Hari Rabu");
    break;
  default:
    console.log("Hari tidak dikenali");
    break;
}

// ======== LOGICAL OPERATOR =======
// && -> and
// || -> or
// ! -> not

//  AND -> harus kedua kondisinya bernilai true agar menghasilkan true
const umur: number = 18;
const punyaSIM: boolean = true;

if (umur >= 19 && punyaSIM === true) {
  console.log("boleh bawa kendaraan");
} else {
  console.log("belum boleh bawa kendaraan");
}

// OR -> Kalau salah satu ada yang nilainua true, maka hasilnya akan true
const car: string = "mercy";
if (car === "bmw" || car === "mercy") {
  console.log("mobil eropa");
} else {
  console.log("mobil jepang");
}

// NOT -> membalikan nilai boolean
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

if (!isSunny) {
  console.log("mendung");
} else {
  console.log("cerah");
}

const data = "undefined";
console.log(Boolean(data));
console.log(!!data);

// ======TERNARY OPERRATOR =======
// shortcut untuk if else condition
// confition ? true : false

const str: string = "javascript";

//  cara panjang
if (str === "javascript") {
  console.log("javascript");
} else if (str === "typescript") {
  console.log("typescript");
} else {
  console.log("not found");
}
// cara singkat
console.log(str === "javascript" ? "javascript" : "not javascript");

//  ============= LOOP STATEMENT (PERULANGAN)=============
//  rangkaian instruksi yang dilakukan berulangkali hingga kondisi tidak terpenuhi
// time loop : for loop, while loop, do while loop

// FOR LOOP -> MEMPUNYAI 3 STATEMENT
//      statement 1 -> menginisialisasikan variabel dari looping itu sendiri
//      Statement 2 ->mendifine kondisi dari looping itu sendiri
//      Statement 3 -> kode yang di eksekusi di akhir setiap iterasi

//  for (statement1;statement2;statement3){
//      code block yang akan di ulanga
// }

// FOR LOOP
//  besar ke kecil
for (let i = 0; i <= 10; i++) {
  console.log("hello world");
}
// kecil ke besar
for (let i = 10; i >= 0; i--) {
  console.log("hello world");
}

// WHILE LOOP
// while(condition){
//          codeblock yg akan di ulang
// }

let i: number = 0;

while (i < 10) {
  console.log(i + 1);
  i++;
}

// DO WHILE LOOP
// do {
//      code block yang akan diulang
// } while(condition);

let count: number = 100;
do {
  console.log(count);
  count++;
} while (count <= 5);

// BREAK
// UNTUK MENGHENTIKAN LOOPING

let sum: number = 0;
while (true) {
  console.log(sum);
  if (sum >= 5) {
    break;
  }
  sum++;
}

//CONTINUE
// MELAKUKAN SKIP PADA LOOPING

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

//EXERCISE
//cetak angka genap dari 2 sampai 20
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
for (let i = 2; i <= 20; i++)
  if (i % 2 === 0) {
    console.log(i);
  }
