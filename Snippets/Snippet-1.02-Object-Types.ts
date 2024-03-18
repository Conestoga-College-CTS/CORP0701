// -------------------
// OBJECT TYPES

// Array
let readings: number[] = [23.4, 24.1, 22.8];
readings = [23.4, 24.1, '22.8']; // Error: Type 'string' is not assignable to type 'number'.

// Enum
enum Status { On, Off, Standby };
let deviceStatus: Status = Status.On;
deviceStatus = Status.Standby;
deviceStatus = "On"; // Error: Type '"On"' is not assignable to type 'Status'.
deviceStatus = 1; // Off - zero-based index

enum MotorStatus { On = 1, Off, Standby };
deviceStatus = 2; // Off

enum DeviceError { NoError = 0, LowBattery= 120 , Overheating = 130 };
let myDeviceError: DeviceError = DeviceError.NoError;
myDeviceError = 2; // Error: Type '2' is not assignable to type 'DeviceError'.
myDeviceError = 120; // LowBattery

// Tuple
let state: [string, boolean] = ["fan", false];
state = ["standby", true];
state = ["light", 12]; // Error: Type 'number' is not assignable to type 'boolean'.
state = ["light", false, "fan"]; // Error: Type 'string' is not assignable to type 'boolean'.