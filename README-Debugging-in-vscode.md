# Debugging in VS Code

Please refere to Project-1.0.9-Program-to-Debug as a sample for this exercise or use exisitng typescript project.

1. TS code needs to be compiled to JS, as the debuggers typically work with JS. Ensure tsconfig.json file is properly set up in the project root. It should include "sourceMap": true in the compiler options to generate source maps, which link the compiled JavaScript back to your original TS code.

```
...
"sourceMap": true,
...
```

2. Open the project folder in VSCode. Create a lunch configuration file in VSCode by switchin to the "Run and Debug" panel on the side of the window or using the short cut ```Ctrl+Shift+D```. Then on the top drop down menu click ```Add Config(<Project NAme>)```. This will add a lunch.json file in the root folder of your project inside a ```.vscode``` folder. It will ask for the debugger, select Node.js.This can also be done by using the Command Palette (Ctrl + Shift + P) and searching for ```Debug: Add Configuration``` and executing it. The ```launch.json``` file looks like this, modify ```program``` attribute to point to the main file:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/src/index.ts",
      "outFiles": [
        "${workspaceFolder}/**/*.js"
      ]
    }
  ]
}
```
3. Add break points in your program by clicking on the space after the line number, a red dot should appear.

4. To start debugging, go to "Run and Debug" panel on the side of the window or using the short cut ```Ctrl+Shift+D``` and click the green play button. Make sure the correct project is selected under the dropdown at the top.

5. The program should stop at the break point.