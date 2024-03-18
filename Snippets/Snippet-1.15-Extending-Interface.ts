// -----------------------------
// Extending interface

interface IPerson {
  name: string;
  greet(): void;
}

interface IEmployee extends IPerson {
  employeeId: string;
  reportToWork(): void;
}

class Employee implements IEmployee {
  constructor(public name: string, public employeeId: string) {}

  greet(): void {
    console.log(`Hello, my name is ${this.name}.`);
  }

  reportToWork(): void {
    console.log(`Employee ${this.name} with ID ${this.employeeId} reporting to work.`);
  }
}

// -----------------------------
// Extending multiple interfaces

interface IPowerable {
  powerOn(): void;
  powerOff(): void;
}

interface IMaintainable {
  performMaintenance(): void;
}

interface IConfigurable {
  configure(settings: object): void;
}

interface IMachine extends IPowerable, IMaintainable, IConfigurable {
  startProductionCycle(): void;
}

class AutomatedAssemblyLine implements IMachine {
  powerOn(): void {
    console.log("Assembly line powered on.");
  }

  powerOff(): void {
    console.log("Assembly line powered off.");
  }

  performMaintenance(): void {
    console.log("Performing maintenance on the assembly line.");
  }

  configure(settings: object): void {
    console.log("Configuring assembly line with settings:", settings);
  }

  startProductionCycle(): void {
    console.log("Starting the production cycle on the assembly line.");
  }
}

