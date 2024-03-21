import * as fs from 'fs';
import * as path from 'path';

export class SimpleLogger {
  private logFile: string;

  constructor(logFilePath: string) {
    const logDirectory = path.dirname(logFilePath);

    // Ensure the log directory exists
    if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory, { recursive: true });
    }

    this.logFile = logFilePath;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    // Append log message to the log file
    fs.appendFile(this.logFile, logMessage, (err: any) => {
      if (err) {
        console.error('Failed to write to log file:', err);
      }
    });
  }
}
