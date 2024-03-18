// Class Access Modifiers

class Sensor {
  public id: number;
  private type: string; 
  protected status: string; 
  readonly createdAt: Date; 
  static manufacturer: string = 'SensorTech';

  constructor(id: number, type: string, status: string) {
      this.id = id;
      this.type = type;
      this.status = status;
      this.createdAt = new Date(); // Initialized at the time of object creation
  }

  public readData(): string {
      return `Reading data from Sensor ID: ${this.id}`;
  }

  private updateType(newType: string): void {
      this.type = newType;
  }

  protected updateStatus(newStatus: string): void {
      this.status = newStatus;
  }

  static getManufacturer(): string {
      return Sensor.manufacturer;
  }
}


// Create an object of class Sensor
let sensor = new Sensor(101, 'Temperature', 'Active');

console.log(sensor.readData()); // Public method, accessible

sensor.updateType('Humidity'); // Error: Property 'updateType' is private and only accessible within class 'Sensor'.

console.log(sensor.status); // Error: Property 'status' is protected and only accessible within class 'Sensor' and its subclasses.

sensor.updateStatus('Inactive');  //Error: Property 'updateStatus' is protected and only accessible within class 'Sensor' and its subclasses.

console.log(Sensor.getManufacturer()); // Static method, called on the class itself
