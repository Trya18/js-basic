const arr = []; //cara 1
const arr2 = new Array(); //cara 2
const arrayOfString: string[] = ["A", "B", "C", "D", "E"] //Cara 3
const arrayOfNumber: number[] = [1, 2, 3, 4, 5]; //cara 4   

interface Student {
    name: string;
    email: string;
    hobby?: string;
}
const students: Student[] = [
    { name: "budi",email: "budi@mail.com", hobby: "reading" },
    { name: "siti",email: "siti@mail.com" },
    { name: "joko",email: "joko@mail.com", hobby: "painting" },
]

console.log(students.length);
console.log(students[1].name);

//==========FOR OF===============
const fruits: string[] = ["Apple", "Banana", "Orange"]
for (const fruit of fruits) {
    console.log(fruit); 
}


//===========FUNCTION========
//1. function declaration
// function namaFunction (parameter){
        // logic
//   }
function square() {
    return 5*5;
}
const result = square();
console.log(result);
console.log(square());

//2. Function declaration
// const namaFunction = function (parameter){
//      logic
//      }

function square2() {
    return 5*5;
}
console.log(square2());

const result2 = square2()
console.log(result2);

// ============= FUNCTION SCOPE =============
//Variable yang di didefine didalam function

function greeting() {
    const hello: string = "hello";
    console.log(hello);
    return hello;
}

greeting(); // ini untuk memanggil atau menjalankan  fungsi (execute)   
//console.log(hello); ===> ini tidak bisa karena harus di dlm function


// ==========PARAMETER & ARGUMENT=====

//P : variabel yang mewakili value dari argument yg di masukan
// A : value yang di masukan saat pemanggilan function

function greeting2 (name: string, company: string){
    const hello: string = "hello";
    return hello + name +","+ company;
}
console.log(greeting2("joko", "toko"));
console.log(greeting2("siti", "sopi"));
console.log(greeting2("joko", "rugu"));

// ======DEFAULT PARAMTER=======





// ======NESTED FUNCTION======

// fungsi  yang berada disalam fungsi
// inner function -> bisa mengakses para meter dari outer
// outer function -> tidak bisa mengakses para meter dari inner

// outer
function getMessage(firstName: string) {
    // inner
    function sayHello() {
        return "Hello " + firstName +", ";
    }
    function welcome(){
        return " welcome to purwadhiks";
    }
    return sayHello() + welcome();
}
console.log (getMessage("jhon"));

//=============RECURSIVE============
// fungsi yang memanggil dirinya sendiri

function countdown(number: number){
    console.log(number);

    let nextNumber = number -1;

    if (nextNumber > 0) {
        countdown(nextNumber);
    }
}
countdown(5)

//===========ARROW FUCNTION=========
// shourtcut untuk menuliskan function expression

const square3 = function(angka:number) {
    return angka * angka;
};
//contoh arrow func
//syntax : () => {}
const square4 = (angka: number)=>{
    return angka*angka
};
//kalaumisal hanya 1 line bisa di shortcut
const square5 = (angka: number) => angka * angka;


// =================== ARRAY BUILT IN METHOD ==========

//JOIN -> MENGGABUNGKAN VALUE YANG ADA DALAM ARRAY KE DLM BENTUK STRING 
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

//POP -> Menghapus elemen terakhir dari array
const words2: string[] = ["hello", "world", "test"];
console.log(words2);
words2.pop();
console.log(words2);

//SHIFT -> Menghapus elemen pertama dari array
const words3: string[] = ["hello", "world", "test"];
console.log(words3);
words3.shift();
console.log(words3);

//UNSHIFT -> Menambah elemen pertama dari array
const words4: string[] = ["hello", "world", "test"];
console.log(words4);
words4.unshift("joko");
console.log(words4);

//PUSH -> Menambah elemen terakhir dari array
const words5: string[] = ["hello", "world", "test"];
console.log(words5);
words5.push("joko");
console.log(words5);



