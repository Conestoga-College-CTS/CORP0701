// SensorData generic interface with a type variable 'T'
interface SensorData<T> {
  type: string;
  value: T;
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius: number): number {
  return (celsius * 9 / 5) + 32;
}

// Function to ensure humidity is within the 0-100% range
function normalizeHumidity(humidity: number): number {
  return Math.min(Math.max(humidity, 0), 100);
}

// Generic function to process sensor data
function processSensorData<T>(data: SensorData<T>): T {
  if (data.type === "temperature") {
    // TypeScript needs a type assertion here because it can't guarantee the type matches at runtime
    const tempInFahrenheit = convertCelsiusToFahrenheit(data.value as unknown as number);
    return tempInFahrenheit as unknown as T;
  } else if (data.type === "humidity") {
    // Again, a type assertion is necessary
    const normalizedHumidity = normalizeHumidity(data.value as unknown as number);
    return normalizedHumidity as unknown as T;
  } else {
    // For other types of data, just return it as is
    return data.value;
  }
}

// Example usage:
const temperatureSensorData: SensorData<number> = { type: "temperature", value: 25 }; // 25°C
const processedTemperature = processSensorData(temperatureSensorData); // should be converted to 77°F
console.log(`Processed Temperature: ${processedTemperature}°F`);

const humiditySensorData: SensorData<number> = { type: "humidity", value: 105 }; // 105% (out of expected range)
const processedHumidity = processSensorData(humiditySensorData); // should be normalized to 100%
console.log(`Processed Humidity: ${processedHumidity}%`);