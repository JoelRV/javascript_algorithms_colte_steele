// base syntax for class declaration
// MUST contain a constructor function that initializes some properties
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.missed = 0;
        this.scores = [];
    }
    // instance methods
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.missed++;
        return `${this.firstName} ${this.lastName} has been late ${this.missed} times`;
    }
    addScores(score) {
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce((a, b) => a + b);
        return sum / this.scores.length;
    }
    // class methods
    static enrollStudents(...students) {
        // maybe send an email
        return "ENROLL STUDENTS";
    }
}

// to initialize an new instance of the class use the new keyword
let firstStudent = new Student("Joel", "Rod", "11th");

console.log(firstStudent);
console.log(firstStudent.fullName());
console.log(firstStudent.markLate());
console.log(firstStudent.markLate());

console.log(firstStudent.addScores(25));
console.log(firstStudent.addScores(26));
console.log(firstStudent.calculateAverage());

console.log(Student.enrollStudents()); // note how class method only works on the class

// here is an example of real application of a class method
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

// here we see a class method that can be applied on two instances of
// Point, but this function makes no sense at the individual level of a
// Point instance.
console.log(Point.distance(p1, p2)); // 7.0710678118654755
