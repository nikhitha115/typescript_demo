namespace Calculator {

    export function add(a: number, b: number): number {
        return a + b;
    }

    export function subtract(a: number, b: number): number {
        return a - b;
    }

    export function multiply(a: number, b: number): number {
        return a * b;
    }

    export function divide(a: number, b: number): number {
        return a / b;
    }
}

let x: number = 30;
let y: number = 10;

console.log("First Number:", x);
console.log("Second Number:", y);

console.log("Addition:", Calculator.add(x, y));
console.log("Subtraction:", Calculator.subtract(x, y));
console.log("Multiplication:", Calculator.multiply(x, y));
console.log("Division:", Calculator.divide(x, y));
