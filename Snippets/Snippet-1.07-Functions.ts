// Funcitons in Typescript

// -------------------
// Function Declaration
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20)); // 30

console.log(add(10, true)); // Error: Argument of type 'true' is not assignable to parameter of type 'number'. 

console.log(add([1,2])); // Error: Argument of type 'number[]' is not assignable to parameter of type 'number'. 

// Arrow Function
const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("IoT Device")); // Outputs: Hello, IoT Device!

// Arrow Function with Implicit Return
const arrowAdd = (a: number, b: number): number => a + b;

console.log(arrowAdd(10, 20)); // 30

// Function Expression
const subtract = function(a: number, b: number): number {
  return a - b;
};

console.log(subtract(20, 10)); // 10

// -------------------
// Optional Parameters
function logMessage(message: string, deviceId?: string): void {
  if(deviceId) {
    console.log(`[${deviceId}] - ${message}`);
  } else {
    console.log(message);
  }
}

logMessage("Device is offline"); // Device is offline

logMessage("Device is offline", "IoT-Device-1"); // [IoT-Device-1] - Device is offline

// -------------------
// Default Parameters
function connectToBroker(host: string, port: number = 1883): void {
  console.log(`Connecting to broker at ${host}:${port}`);
}

connectToBroker("mqtt.eclipse.org"); // Connecting to broker at mqtt.eclipse.org:1883

connectToBroker("mqtt.eclipse.org", 1884); // Connecting to broker at mqtt.eclipse.org:1884

// -------------------
// Rest Parameters

function calculateAverage(...numbers: number[]): number {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return numbers.length ? sum / numbers.length : 0;
}

console.log(calculateAverage(22.5, 23.1, 22.8, 23.0)); // 22.85
console.log(calculateAverage(45.0, 47.0, 46.0)); // 46
console.log(calculateAverage()); // 0

// -------------------
// Union Type Parameters
function processInput(input: string | number): void {
  // Function logic
}

processInput("Hello, World!"); // No Error
processInput(100); // No Error
processInput(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.  

// -------------------
// Any Type Parameters
function handleUnknownInput(input: any): void {
  // Function logic
}

handleUnknownInput("Hello, World!"); // No Error
handleUnknownInput(100); // No Error
handleUnknownInput(true); // No Error
