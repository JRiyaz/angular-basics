// Backtics and spread operator

let fruits: Array<string> = ["Apple", "Orange", "Banana"];
let numbers: Array<number> = [1, 2, 3]

let user = {
    firstName: "Riyaz",
    lastName: "J",
    email: "j.riyazu@gmail.com"
}

let userDetails = {
    ...user,
    address: "Santha Bazar Street",
    city: "B.Kothakota",
    zipcode: 517370
}

// Optional method parameter
function addNumbers(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

export function add(x?: number, y?: number, z?: number): number {
    return x + y + z;
}

function addNumbersInArray(numbers: number[]): number {
    let result: number = 0;
    numbers.forEach(e => result += e);
    return result;
}

let resultAddNumbers: number = addNumbers(...numbers);
let resultAddNumbersInArray: number = addNumbersInArray(numbers);

// De-structure and Rest

let { firstName: fName, lastName: lName } = user;     // from object

let [apple, orange, banana] = fruits;               // from array

function printUser(...fruits: string[]): void {
    fruits.forEach(fruit => console.log(fruit))
}

printUser(...fruits);
