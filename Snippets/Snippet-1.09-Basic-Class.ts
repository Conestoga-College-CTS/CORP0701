// Class in Typescript

class Device {
  // Properties
  name: string;
  type: string;
  sensorCount: number;
  
  // Constructor
  constructor(name: string, type: string, sensorCount: number) {
    this.name = name;
    this.type = type;
    this.sensorCount = sensorCount;
  }
  
  // Method
  displayDetails() {
    console.log(`Name: ${this.name}, Type: ${this.type}, Sensor Count: ${this.sensorCount}`);
  }
}

// Create an object of class Device
let device1 = new Device('Temperature Sensor', 'Networked Device', 2);
device1.displayDetails(); // Name: Temperature Sensor, Type: Networked Device, Sensor Count: 2

let device2 = new Device('iPhone', 1233, 1000); // Error: Argument of type '1233' is not assignable to parameter of type 'string'.
