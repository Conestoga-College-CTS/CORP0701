// Primitive type aliases
type deviceId = string;

let device1: deviceId = "d1";
let device2: deviceId = 23; // Error: Type '23' is not assignable to type 'string'.

// Object type aliases
type DeviceConfig = {
  deviceId: string;
  location: string;
  sensorType: 'temperature' | 'humidity' | 'presence';
};

let myConfig: DeviceConfig = {
  deviceId: "d1",
  location: "Toronto",
  sensorType: "temperature"
};

let otherConfig: DeviceConfig = {
  deviceId: "d1",
  location: "Toronto",
  sensorType: "pressure" // Error: Type '"pressure"' is not assignable to type '"temperature" | "humidity" | "presence"'.
};

let badConfig: DeviceConfig = { // Error: Property 'sensorType' is missing in type '{ deviceId: string; location: string; }' but required in type 'DeviceConfig'.
  deviceId: "d2",
  location: "New York",
};

function configureDevice(config: DeviceConfig) {
  // Configuration logic here
}
configureDevice(myConfig);

type DeviceProfile = {
  deviceId: string;
  location: string;
  configuration: {
    sensorType: 'temperature' | 'humidity' | 'presence';
    threshold: number;
    type: 'cellular' | 'wifi' | 'bluetooth';    
  };
  batteryLevel?: number;
};

let myProfile: DeviceProfile = {
  deviceId: "d1",
  location: "Toronto",
  configuration: {
    sensorType: "temperature",
    threshold: 25,
    type: "wifi"
  }
};