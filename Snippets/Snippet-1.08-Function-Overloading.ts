// Funcitons in Typescript

// -------------------
// Function Overloading

function printMessage(a: number): number;
function printMessage(a: string): string;

// Function implementation
function printMessage(a: number | string): number | string {
  if (typeof a === 'number') {
    console.log(`Got a number: ${a}`);
    return a;    
  } else {
    console.log(`Got a string: ${a}`);
    return a;
  }
}  

printMessage(101); // Got a number: 101

printMessage('Hello'); // Got a string: Hello