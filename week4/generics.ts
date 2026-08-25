// ==========================================
// EXPERIMENT 3: GENERICS
// Generic Variables, Functions and Constraints
// ==========================================


// 1. GENERIC VARIABLES
// ------------------------------------------

let numberList: Array<number> = [10, 20, 30, 40, 50];

let stringList: Array<string> = [
    "Apple",
    "Banana",
    "Mango"
];

console.log("Number List:", numberList);
console.log("String List:", stringList);


// 2. GENERIC FUNCTION
// ------------------------------------------

function display<T>(value: T): void {
    console.log("Value:", value);
}

console.log("\nGeneric Function:");

display<number>(100);
display<string>("Hello TypeScript");
display<boolean>(true);


// 3. GENERIC FUNCTION WITH ARRAY
// ------------------------------------------

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let numbers: number[] = [10, 20, 30, 40];
let names: string[] = ["Ravi", "Tejaswini", "Sita"];

console.log("\nFirst Elements:");

console.log(
    "First Number:",
    getFirstElement<number>(numbers)
);

console.log(
    "First Name:",
    getFirstElement<string>(names)
);


// 4. GENERIC CONSTRAINT
// ------------------------------------------

function printLength<T extends { length: number }>(value: T): void {
    console.log("Value:", value);
    console.log("Length:", value.length);
}

console.log("\nGeneric Constraint:");

printLength<string>("TypeScript");

printLength<number[]>([10, 20, 30, 40]);


// 5. GENERIC CONSTRAINT WITH OBJECT
// ------------------------------------------

function getProperty<T, K extends keyof T>(
    obj: T,
    key: K
): T[K] {
    return obj[key];
}

let student = {
    name: "Tejaswini",
    age: 19,
    course: "AI & DS"
};

console.log("\nGeneric Constraint with Object:");

console.log("Student Name:", getProperty(student, "name"));
console.log("Student Age:", getProperty(student, "age"));
console.log("Student Course:", getProperty(student, "course"));
