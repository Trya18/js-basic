console.log("Hello, World!");
//ini adalah komentar
/*
ini adalah comment
*/ 
//==============================variabel===============================
//storage / penampungan data
// var, let, const
var person = "budi";
console.log(person);

let person2 = "joko";
console.log(person2);
person2 = "siti";  //ini namanya di re assign
console.log(person2);

// var person = "test"
// console.log(person);

const person3 = "jack";
// person3 = "udin"; //tidak bisa dirubah nilai variablenya 
console.log(person3);  

//============================== VARIABLE NAMING ===============================
/*
    -must contain only letters, digit, or symbol $ and _
    -cannot start with digit
    -cannot use reserved keyword ( var, let, const, if, else, dll)
    -case sensitive (huruf besar dan kecil berbeda)
*/
const companyName = "Purwadhika"; // camelCase (keluar di ujian)
const CompanyName = "Purwadhika"; // // pascalCase
const company_profile = "Purwadhika"; // snake_casse

//============================== DATA TYPE ===============================
// shortcut quokka ( cmd + K  (lepas dulu) + Q)
// tipe data pada javascript 
// 1. Primitive Data Type
    // - String (menggunakan "" atau '') 
        console.log('Purwadhika');
        console.log("Purwadhika");
        console.log('Purwadhika');

    // - Number (angka)
        console.log(123); // integer
        console.log(12.5); // float
        console.log(1); 
        console.log(1100);
    // - Boolean
        console.log(true);
        console.log(false);

    // - Undefined
        // JS tidak tau isinya
        let orang2= undefined;

    // - Null
        // menandakan sebuah variable yang tidak memiliki nilai (menandakan sebuah value itu masih kosong dan belum terisi)
        let orang = null;

    // - Symbol
// 2. Non-Primitive Data Type
    // - Object
    // - Array

// String
let nama = "Budi"; // menggunakan "" atau ''

//cara mengecek tipe data
console.log(typeof companyName);
console.log(typeof 1100);
console.log(typeof true)
console.log(typeof orang)
console.log(typeof orang2)