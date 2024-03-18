// -----------------------------
// Class with single interface

interface IDevice {
  id: string;
  turnOn(): void;
  turnOff(): void;
}

class SmartLight implements IDevice {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  turnOn(): void {
    console.log(`SmartLight ${this.id} is turned on.`);
  }

  turnOff(): void {
    console.log(`SmartLight ${this.id} is turned off.`);
  }
}

let light = new SmartLight('L1');
light.turnOn(); // SmartLight L1 is turned on.

// -----------------------------
// Class with multiple interfaces

interface IDimmable {
  brightness: number;
  setBrightness(brightness: number): void;
}

interface IStatus {
  getStatus(): string;
}

class AdvancedSmartLight implements IDevice, IDimmable, IStatus {
  id: string;
  brightness: number = 0; // Default brightness
  private isOn: boolean = false;

  constructor(id: string) {
    this.id = id;
  }

  turnOn(): void {
    this.isOn = true;
    console.log(`SmartLight ${this.id} is turned on.`);
  }

  turnOff(): void {
    this.isOn = false;
    console.log(`SmartLight ${this.id} is turned off.`);
  }

  setBrightness(brightness: number): void {
    this.brightness = brightness;
    console.log(`SmartLight ${this.id} brightness set to ${brightness}.`);
  }

  getStatus(): string {
    return `SmartLight ${this.id} is currently ${this.isOn ? 'on' : 'off'}, brightness level at ${this.brightness}.`;
  }
}

const mySmartLight = new AdvancedSmartLight('001');

mySmartLight.turnOn(); // SmartLight 001 is turned on.
mySmartLight.setBrightness(75); // SmartLight 001 brightness set to 75.
console.log(mySmartLight.getStatus()); // SmartLight 001 is currently on, brightness level at 75.
