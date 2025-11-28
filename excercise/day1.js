// ========== soal 1 =========== 
const width = 3;
const lenght = 5;

console.log(lenght*width);

// ======== soal 2 ===========
const width2 = 3;
const lenght2 = 5;

console.log(2*(width+lenght));

//============ soal 3 =============
const radius = 5 

//diameter
console.log(2*radius);

//circumference
console.log(3.14*10);

//area
console.log(3.14*(5**2));

//============ soal 4 =============
const a = 80;
const b = 65;

console.log(180-(a+b));


// //=============== soal 5 ==============
// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
// ○ Example : 400 days → 1 year, 1 month, 5 days
// ○ Example: 366 days → 1 year, 0 month, 1 day
// 1 year : 365 days, 1 month : 30 days

const totalDays = 400;
let remainingDays = 0;

const years = Math.floor (totalDays / 365);
console.log(years)

remainingDays = totalDays%365;
console.log(remainingDays);

const month = Math.floor(remainingDays/30);
console.log(month);

remainingDays = remainingDays%30
console.log(remainingDays)


// ==========soal 6 ============
// Write a code to get diﬀerence between dates in days.
// ○ Example : date1 = 2022-01-20, date2 =2022-01-22
// ○ Output : 2

// days difference
const days1 = new Date ("2022-01-20");
const days2 = new Date ("2022-01-22");

// convert to milliseconds
const difference = days2.getTime() - days1.getTime();

//  convert to day
const resultDifference = difference/60/60/24/1000;
console.log(`Days Difference: ${Math.floor(resultDifference)} days`);