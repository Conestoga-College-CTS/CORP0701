# Class and Interface - create a class that writes data to a file

  ```ts
  class Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getInfo(): string {
      return `${this.make} ${this.model} (${this.year})`;
    }
  }

  const myCar = new Vehicle('Toyota', 'Corolla', 2020);
  console.log(myCar.getInfo());
  ```


  Add Interface

  ```ts
  interface IVehicle {
    make: string;
    model: string;
    year: number;
    getInfo(): string;
  }
  ```

  Final Code:

  ```ts
  console.log('Hello, TypeScript project!');

  interface IVehicle {
    make: string;
    model: string;
    year: number;
    getInfo?(): string;
  }

  class Vehicle implements IVehicle{
    make: string;
    model: string;
    year: number;

    constructor(vehicle: IVehicle) {
      this.make = vehicle.make;
      this.model = vehicle.model;
      this.year = vehicle.year;
    }

    getInfo(): string {
      return `${this.make} ${this.model} (${this.year})`;
    }
  }

  const myVehicle: IVehicle = {
    make: 'BMW',
    model: 'Z3',
    year: 2012,
  };

  const myCar = new Vehicle(myVehicle);
  console.log(myCar.getInfo());
  ```