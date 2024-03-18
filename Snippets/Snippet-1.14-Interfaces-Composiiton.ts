// Define a simple interface for an Address
interface Address {
  street: string;
  city: string;
  zipCode: number;
}

// Use the Address interface inside a User interface
interface User {
  name: string;
  age: number;
  address: Address; // Incorporating the Address interface
}

// Example of using the User interface with nested Address interface
const user: User = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: 12345
  }
};
