# Setting up TypeScript Project

1. Initialize Project

    Create a new directory for the project and navigate into it:

    ```bash
    mkdir my-ts-project
    cd my-ts-project
    ```

    Initialize a new npm project by running:
    ```bash
    npm init -y
    ```
    This command creates a package.json file with default values.

2. Install TypeScript
  
    Install TypeScript as a dev dependency:

    ```bash
    npm install --save-dev typescript
    ```

    Initialize TypeScript in the project by creating a tsconfig.json file:
    
    ```bash
    npx tsc --init
    ```

    This command generates a tsconfig.json file with default TypeScript compiler options.

3. Configure tsconfig.json
  
    Modify ```tsconfig.json``` to include baseUrl and outDir settings:

    - ```baseUrl```: This is the base directory relative to which non-absolute module names are resolved.
    - ```outDir```: Specifies the output folder for all emitted files.
    Example configuration:

    ```json
    {
      "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "baseUrl": "./src", // Adjust based on source files location
        "outDir": "./dist", // Output directory for all emitted files
        "strict": true,
        "esModuleInterop": true
      },
      "include": ["src/**/*"], // Adjust this to include your TypeScript files
      "exclude": ["node_modules", "**/*.spec.ts"]
    }
    ```

4. Setup ESLint

    Install ESLint and related plugins/packages as dev dependencies:
    ```bash
    npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```

    Initialize ESLint by running:
    ```bash
    npx eslint --init
    ```

    Follow the prompts to set up ESLint for the project. When asked, choose to use a popular style guide and select JSON for the config file format.
    
    Configure ESLint for TypeScript by modifying the .eslintrc.json file. Ensure to extend plugin:@typescript-eslint/recommended and set the parser to @typescript-eslint/parser. Example:

    ```json
    {
      "parser": "@typescript-eslint/parser",
      "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
      },
      "rules": {
        // Add custom rules here
      }
    }
    ```

5. Create Main Entry File

    Create a source directory and main entry file:
    ```bash
    mkdir src
    touch src/index.ts
    ```

    Write TypeScript code in src/index.ts. For example:
    ```typescript
    console.log('Hello, TypeScript project!');
    ```

6. Add Scripts to package.json
  
    Add convenient scripts to package.json to build and run TypeScript project:

    ```json
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js" // Adjust if main file or outDir is different
    }
    ```

7. Build and Run Project

    Build project:

    ```bash
    npm run build
    ```
    
    This compiles TypeScript files to JavaScript in the outDir specified.
    
    Run compiled project:
    ```bash
    npm start
    ```

