// 1. Function with parameter types & return type
function add(a: number, b: number): number {
    return a + b;
}
console.log("Addition:", add(10, 20));


// 2. Optional parameter
function student(name: string, age?: number): void {
    if (age !== undefined) {
        console.log("Name:", name, "Age:", age);
    } else {
        console.log("Name:", name);
    }
}
student("Nikhitha");
student("Nikhitha", 20);


// 3. Default parameter
function greet(name: string = "Student"): void {
    console.log("Welcome", name);
}
greet();
greet("Nikhitha");


// 4. Arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};
console.log("Multiplication:", multiply(5, 6));


// 5. REST parameter
function sum(...numbers: number[]): number {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum:", sum(10, 20, 30, 40));


// 6. Convert normal function into arrow function

// Normal Function
function square(x: number): number {
    return x * x;
}
console.log("Square (Normal):", square(5));

// Arrow Function
const squareArrow = (x: number): number => x * x;
console.log("Square (Arrow):", squareArrow(5));