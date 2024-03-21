# Development Environment Setup

## Tool setup for using TypeScript
    
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