function greetUser(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

// Define a user name
let userName: string = "Alice";

// Call the greetUser function and store the result
let greeting: string = greetUser(userName);

// Output the greeting to the console
console.log(greeting);