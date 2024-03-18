// -----------------------------
// Imporing exported members
import {square, cube as cubed} from './Snippet-1.19-Module-Export';

console.log(square(5)); // Outputs: 25
console.log(cubed(5)); // Outputs: 125

// -----------------------------
// Importing all members as part of a single namespace
import * as Utils from './Snippet-1.19-Module-Export';

console.log(Utils.square(2)); // Outputs: 4
console.log(Utils.cube(2)); // Outputs: 8

// -----------------------------
// Importing default export
import Calculator from './Snippet-1.18-Module-Export-Default';

const calc = new Calculator();
console.log(calc.add(5, 2)); // Outputs: 7

// -----------------------------
// Importing none-default export
import {pi} from './Snippet-1.18-Module-Export-Default';

console.log(pi); // Outputs: 3.14

// -----------------------------
// Importing default export with a different name
import Calc from './Snippet-1.18-Module-Export-Default';

const anotherCalc = new Calc();
console.log(anotherCalc.add(5, 2)); // Outputs: 7