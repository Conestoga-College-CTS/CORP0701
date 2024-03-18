abstract class Sensor {
  protected id: string;
  protected data: number;

  constructor(id: string) {
    this.id = id;
    this.data = 0;
  }

  // Common method that can be used by all sensors
  initialize(): void {
    console.log(`Sensor ${this.id} initialized.`);
  }

  // Abstract method that must be implemented by subclasses
  abstract readData(): void;
}

class TemperatureSensor extends Sensor {
  constructor(id: string) {
    super(id);
  }

  readData(): void {
    this.data = Math.random() * 100; // Simulate reading temperature
    console.log(`Temperature Sensor ${this.id}: Data read ${this.data}`);
  }
}

class MotionSensor extends Sensor {
  constructor(id: string) {
    super(id);
  }

  readData(): void {
    this.data = Math.random() > 0.5 ? 1 : 0; // Simulate motion detection
    console.log(`Motion Sensor ${this.id}: Data read ${this.data}`);
  }
}

// Usage
const temperatureSensor = new TemperatureSensor("T1");
temperatureSensor.initialize(); // Sensor T1 initialized.
temperatureSensor.readData(); // Temperature Sensor T1: Data read 23.456

const motionSensor = new MotionSensor("M1");
motionSensor.initialize(); // Sensor M1 initialized.
motionSensor.readData(); // Motion Sensor M1: Data read 1