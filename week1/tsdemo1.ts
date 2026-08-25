// Special Types in TypeScript

let a: any = 10;
let b: unknown = "Hello";

if (typeof b === "string") {
    console.log(b.toUpperCase());
}

function display(): void {
    console.log("Welcome");
}

let c: null = null;
let d: undefined = undefined;

function error(): never {
    throw new Error("Error");
}

display();
console.log(a);
console.log(c);
console.log(d);
