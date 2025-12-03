//  ============SOAL 1 ======
//  Write a code to check whether the number is odd or even
// ○ Example: 25 → odd number, 2 → even number

let angka : number = 25 ;
if (angka % 2 === 0){
    console.log("even number");
}else {
    console.log("odd number");
}

//========SOAL 2=======
//   Write a code to check whether the number is prime number or not
// ○ Example: 7 → 7 is a prime number
// ○ Example: 6 → 6 is not a prime number

const angka2 : number = 6 ;
for (let i = 2; i <= angka2; i++) {
    if (angka2 % i === 0) {
        console.log("not a prime number");
        break;
    } else if ( i === angka2 - 1) {
    console.log("prime number");
    }
}

// ================


 //============SOAL 3 ==========
// // Write a code to find the sum of the numbers 1 to N
// ○ Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// ○ Example: 3 → 1 + 2 + 3 = 6

let n: number = 5;
let sum: number = 0;

for (let i = 1; i <= n; i++) {
    sum= sum + i;
}
console.log(sum);

// =======
let n1: number = 3;
let sum1: number = 0;
for (let i = 1; i <= n1; i++) {
    sum1 = sum1 + i;
}
console.log(sum1);


// =========SOAL 4 ==========
// Write a code to find factorial of a number
// ○ Example: 4! → 4 x 3 x 2 x 1 = 24
// ○ Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720

let n2: number = 4;
let f: number = 1;
for (let i = 1; i <= n2; i++) {
    f = f * i;}
console.log(f);

//===================

let n4: number = 4;
let sum: number = 1;
let message: `!${n} ->`;
for (let i = n4; i >= 1; i--){
sum *=i;
message += i === 1 ? 1 `${i} = ${sum}` : `${i} *`;
}
console.log(message);


// ========== SOAL 5 ==========
// Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610

let n3: number = 15;
let a = 0;
let b = 1;

for (let i = 3; i <=n3; i++){
    let c = a+b;
    a=b;
    b=c;
}
console.log(`${n3} fibonacci number is ${b}`);


//  ==========

