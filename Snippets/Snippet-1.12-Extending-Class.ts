// Base class for all devices
class Device {
  protected type: string;

  constructor(type: string) {
    this.type = type;
  }

  connect() {
    console.log(`Connecting the ${this.type} device.`);
  }

  sendData() {
    console.log(`Sending data from ${this.type} device.`);
  }
}

// Derived class for a Temperature Device
class TemperatureDevice extends Device {
  private unit: string;

  constructor(unit: string = 'Celsius') {
    super('Temperature'); // Call to the parent class's constructor
    this.unit = unit;
  }

  // Overriding the sendData method
  sendData() {
    super.sendData(); // Calling the parent class's sendData
    console.log(`Sending temperature data in ${this.unit}.`);
  }
}

// Another derived class for a Motion Device
class MotionDevice extends Device {
  private sensitivityLevel: number;

  constructor(sensitivityLevel: number = 5) {
    super('Motion'); // Call to the parent class's constructor
    this.sensitivityLevel = sensitivityLevel;
  }

  // Overriding the sendData method
  sendData() {
    super.sendData(); // Calling the parent class's sendData
    console.log(`Sending motion data with sensitivity level ${this.sensitivityLevel}.`);
  }
}

// Using the TemperatureDevice class
const tempDevice = new TemperatureDevice('Fahrenheit');
tempDevice.connect(); // Connecting the Temperature device.
tempDevice.sendData();
// Sending data from Temperature device.
// Sending temperature data in Fahrenheit.

// Using the MotionDevice class
const motionDevice = new MotionDevice(7);
motionDevice.connect(); // Connecting the Motion device.
motionDevice.sendData();
// Sending data from Motion device.
// Sending motion data with sensitivity level 7.
