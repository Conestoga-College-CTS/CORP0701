// Intersection Types

type BasicSensor = {
  id: string;
  type: 'temperature' | 'humidity' | 'motion';
  location: string;
};

type NetworkedSensor = {
  ipAddress: string;
  networkId: number;
};

type BatteryPowered = {
  batteryLevel: number;
  batteryType: string;
};


type AdvancedSensor = BasicSensor & NetworkedSensor & BatteryPowered;

type BatteryPoweredSensor = BasicSensor & BatteryPowered;

let myAdvanceSensor: AdvancedSensor = {
  id: "sensor-123",
  type: "motion",
  location: "Outdoor",
  ipAddress: "192.168.1.50",
  networkId: 101,
  batteryLevel: 85,
  batteryType: "Li-ion"
};

let myBatteryPoweredSensor: BatteryPoweredSensor = {
  id: "sensor-124",
  type: "temperature",
  location: "Indoor",
  batteryLevel: 90,
  batteryType: "Li-ion",
};

let myBasicSensor: BasicSensor = {
  id: "sensor-125",
  type: "humidity",
  location: "Indoor"
};

function configureSensor(sensor: BasicSensor) {
  // Configuration logic here
}

configureSensor(myAdvanceSensor);

configureSensor(myBatteryPoweredSensor);

function updateNetworkAddress(sensor: NetworkedSensor) {
  // Update logic here
}

updateNetworkAddress(myAdvanceSensor);

updateNetworkAddress(myBasicSensor); // Error: Argument of type 'BasicSensor' is not assignable to parameter of type 'NetworkedSensor'.  

updateNetworkAddress(myBatteryPoweredSensor); // Error: Argument of type 'BatteryPoweredSensor' is not assignable to parameter of type 'NetworkedSensor'.

function updateBatteryLevel(sensor: BatteryPowered) {
  // Update logic here
}

updateBatteryLevel(myAdvanceSensor);

updateBatteryLevel(myBatteryPoweredSensor);

updateBatteryLevel(myBasicSensor); // Error: Argument of type 'BasicSensor' is not assignable to parameter of type 'BatteryPowered'.