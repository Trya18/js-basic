// //Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03
// 04 05 06
// 07 08 09 10
// Parameters : height → triangle height

// ==================

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// ● Parameters : n → total looping
// ○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// ○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz

function fizzBuzz(n: number): (number | string)[] {
  const result: (number | string)[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}
console.log(fizzBuzz(6));

console.log(fizzBuzz(15));

// // Create a function to calculate Body Mass Index (BMI)
// ● Formula : BMI = weight (kg) / (height (meter))²
// ● Parameters : weight & height
// ● Return values :
// ○ < 18.5 return “less weight”
// ○ 18.5 - 24.9 return “ideal”
// ○ 25.0 - 29.9 return “overweight”
// ○ 30.0 - 39.9 return “very overweight”
// ○ > 39.9 return “obesity”

function BMI(weight: number, height: number): string {
  const bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "less weight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    return "overweight";
  } else if (bmi >= 30.0 && bmi <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(BMI(50, 1.7));
console.log(BMI(68, 1.7));
console.log(BMI(80, 1.7));
console.log(BMI(95, 1.7));
console.log(BMI(120, 1.7));

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// ○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]
// Function to remove all odd numbers and return only even numbers

function removeOddNumbers(arr: number[]): number[] {
    return arr.filter(num => num % 2 === 0);
}
const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers: number[] = removeOddNumbers(numbers);
console.log(evenNumbers);

// Write a function to split a string and convert it into an array of words
// ○ Example : “Hello World” → [“Hello”, “World”]
function stringToArray(str: string): string[] {
  return str.split(" ");
}
const input = "Hello World";
const result = stringToArray(input);
console.log(result);
