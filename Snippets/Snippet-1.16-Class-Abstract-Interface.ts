// -----------------------------
// Extending interface and abstrct class

interface IConnectable {
  connectToNetwork(networkId: string): void;
  disconnectFromNetwork(): void;
}

interface IProgrammable {
  programSchedule(schedule: object): void;
}

abstract class SmartDevice {
  constructor(public id: string, public name: string) {}

  abstract performAction(action: string): void;

  displayInfo(): void {
    console.log(`Device ID: ${this.id}, Name: ${this.name}`);
  }
}

class Thermostat extends SmartDevice implements IConnectable, IProgrammable {
  private currentTemperature: number = 20; // Default temperature

  constructor(id: string, name: string) {
    super(id, name);
  }

  performAction(action: string): void {
    // Implementation...
  }

  connectToNetwork(networkId: string): void {
    // Implementation...
  }

  disconnectFromNetwork(): void {
    // Implementation...
  }

  programSchedule(schedule: object): void {
    console.log(`Programming thermostat with schedule: ${JSON.stringify(schedule)}`);
  }
}

let device = new Thermostat("T1001", "Living Room Thermostat");
device.displayInfo(); // Device ID: T1001, Name: Living Room Thermostat
device.programSchedule({ time: "08:00", temperature: 22 }); // Programming thermostat with schedule: {"time":"08:00","temperature":22}
