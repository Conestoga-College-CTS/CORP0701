// -------------------
// PRIMITIVE TYPES

// Boolean
let isOnline: boolean = true;  
isOnline = 'true'; // Error: Type 'string' is not assignable to type 'boolean'.

// Number
let temperature: number = 26.5;
temperature = '26.5 deg.C'; // Error: Type 'string' is not assignable to type 'number'.

// String
let deviceId: string = "dskj-3434-dfj3-3434";
deviceId = 3434; // Error: Type 'number' is not assignable to type 'string'.

// Void
function logMessage(message): void {
  console.log(message);
  // This function doesn't return anything
}

// Undefined
let pressure: number | undefined;

// Null
let humidity: number | null = null;
let battery: number = null; // Error: Type 'null' is not assignable to type 'number'.