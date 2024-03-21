# Convert the Vehicle Class into a Module

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