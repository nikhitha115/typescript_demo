class Student {

    public name: string;
    private age: number;
    protected course: string;
    readonly college: string = "ABC Engineering College";
    static university: string = "JNTU";

    // Constructor
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    // Public Method
    public display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
        console.log("College:", this.college);
    }

    // Static Method
    static showUniversity(): void {
        console.log("University:", Student.university);
    }
}

// Object Creation
let s1 = new Student("Nikhitha", 20, "AIML");

// Calling Public Method
s1.display();

// Accessing Public Property
console.log("Student Name:", s1.name);

// Calling Static Method
Student.showUniversity();
