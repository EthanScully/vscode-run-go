**Adds a run and compile button to the active text editor when writing in Go. Windows Only**

__Feel free to modify for other languages.__
## How to Modify
### Install Necessary Packages
Install [Node.js](https://nodejs.org/), and
using the node.js package manager install the dependencies, in the root directory
```shell
npm install
```
### Build VS Code Extension
When in the root directory, run
```shell
vsce package
```
which will create the .vsix file
### What to modify
The package.json defines what buttons link to what in the extension.js script
```json
  "contributes": {
    "commands": [{
      "command": "run-go.run",
      "title": "Run Go File",
      "category": "run-go",
      "icon": "$(play)"
    }],
    "menus": {
      "editor/title/run": [{
        "command": "run-go.run",
        "when": "resourceLangId == go && !isInDiffEditor && !virtualWorkspace && shellExecutionSupported"
      }]
    }
  }
```
"menus" defines when the run button shows up, and "commands" defines what icon to use and "command":"run-go.run" directly links to the extension.js script