# Hands-on Activity – Development Environment Setup

## Visual Studio Code (VS Code) is a powerful editor for TypeScript development.
    
    Provides – code completion, linting, real-time error check

## Tool setup
    
  Install tsc 
    
  ```
  npm install -g typescript
  ```
    
  Install ts-node
  
  ```
  npm install -g ts-node
  ```

  Verify the installed tool
  ```
  npm ls -g
  ```
    
## Compiling and running TS using tsc and node

-  Show that node will not run app.ts

    ```
    node app.ts
    ```

- Compile and run 
    ```
    tsc app.ts

    node app.js
    ```

## Compiling and running TS using ts-node

- Compile and run 

    ```bash
    ts-node app.ts
    ```

## Setting up TS Project

   See file: README-TS-Project-Setup.md 

## Class and Interface - create a class that writes data to a file

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


## Creating Modules

Convert the Car class into a module

```ts
import {IVehicle} from './interfaces/vehicle';

export default class Vehicle implements IVehicle {
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
```

```ts
export interface IVehicle {
    make: string;
    model: string;
    year: number;
    getInfo?(): string;
  }
```

```ts
import Vehicle from './vehicle';
import {IVehicle} from './interfaces/vehicle';
```