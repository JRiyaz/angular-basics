import * as math from "./math.util";
import { add } from "./math.util";
import {add as addTwo} from "./typescript"
// Default import, Named import
import ScientificCalculator, { calculate } from "./math.util";
// We can use any name for the default exported one
import Calculator from "./math.util";

console.log(math.add(1, 2));
console.log(add(1, 2))


// Default import
const cal = new ScientificCalculator();
cal.calculate;

// Default import from math.util
const cal2 = new Calculator();
cal2.calculate;

// Named import
calculate;

addTwo(1,2);
