// Interface defination
interface ISensor {
  type: string | number;
  unit: string;
  value: number;
  vendor ? : string;
  readonly serialNumber: string;
  getValue(): string;
}

// Object of interface
let sensor: ISensor = {
  type: "Temperature",
  unit: "Celsius",
  value: 25,
  serialNumber: "12345",
  getValue: function () {
    return `The value is ${this.value}`
  },
};

sensor.getValue(); // The value is 25

sensor.serialNumber = "54321"; // Error: Cannot assign to 'serialNumber' because it is a read-only property 

// Function using interface
function printSensor(sensor: ISensor) {
  console.log(`Type: ${sensor.type}, Unit: ${sensor.unit}, Value: ${sensor.value}`);
}

printSensor(sensor); // Type: Temperature, Unit: Celsius, Value: 25

// -----------------------------
interface IConnectable {
  connectToNetwork(networkId: string): void;
  disconnectFromNetwork(): void;
}

interface IProgrammable {
  programSchedule(schedule: object): void;
}

class SmartThermostat implements IConnectable, IProgrammable {
  private currentTemperature: number = 20; // Default temperature

  constructor(id: string, name: string) {
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

let thermostat = new SmartThermostat("T1001", "Living Room Thermostat");
thermostat.programSchedule({
  time: "08:00",
  temperature: 22
}); // Programming thermostat with schedule: {"time":"08:00","temperature":22}