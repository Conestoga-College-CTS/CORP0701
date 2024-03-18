// Union Types

let sensorData: number | string;
sensorData = 23;
sensorData = '23 deg.C';
sensorData = true; // Error: Type 'true' is not assignable to type 'string | number'.

function processSensorData(data: number | string) {
  // Processing logic here
}

processSensorData(23);

processSensorData(sensorData);

processSensorData(true); // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.

type deviceStatus = number | string;

let myStatus: deviceStatus = 0;
myStatus = "Online";

myStatus = false; // Error: Type 'false' is not assignable to type 'string | number'.
