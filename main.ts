import { add, subtract, multiply, divide } from "./math.js";

let a: number = 20;
let b: number = 10;

console.log("First Number:", a);
console.log("Second Number:", b);

console.log("Addition:", add(a, b));
console.log("Subtraction:", subtract(a, b));
console.log("Multiplication:", multiply(a, b));
console.log("Division:", divide(a, b));