// A file can only have only one default export many named exports

function add(x?: number, y?: number): number {
    return x + y;
}

function subtract(x?: number, y?: number): number {
    return x - y;
}


function multiply(x?: number, y?: number): number {
    return x * y;
}

function divide(x?: number, y?: number): number {
    return x / y;
}

export {
    add,
    subtract,
    multiply,
    divide
}

// Default export
export default class ScientificCalculator {
    calculate(): void {
        console.log("calculated");
    }
}

// Named export
export function calculate(): void {
    console.log("calculated");
}