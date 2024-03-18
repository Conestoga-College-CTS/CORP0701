// -------------------
// SPECIAL TYPES

// Any
let anything: any = 23;
anything = "hello";
anything = true;

// Unknown
let message: unknown = "Hello";
console.log(message.toUpperCase()); // Error: 'message' is of type 'unknown'.

// Can't directly use the message variable without checking its type
if (typeof message === "string") {
  console.log(message.toUpperCase()); // This is safe
}

// Never
function error(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
  }
}

// Object
let device: { id: string, name: string, status: number } = {
  id: "d1",
  name: "Device 1",
  status: 0
};

device.type = "Cellular"; // Error: Property 'status' does not exist on type '{ id: string; type: string; reading: number; }'.  
device['type'] = "Cellular"; // No error

function registerDevice(device: { id: string; name: string; status: number; }) {
  // Function implementation
}

registerDevice(device); 

let sensor: object = {
  id: "s1",
  type: "temperature",
  reading: 26.5
};

registerDevice(sensor); 
// Error: Argument of type '{ id: string; type: string; reading: number; }' is not assignable to parameter of type '{ id: string; name: string; status: number; }'.

