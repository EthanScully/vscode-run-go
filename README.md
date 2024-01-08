**Adds a run and compile button to the active text editor when writing in Go. Windows Only**

__Feel free to modify for other languages.__
## How to Modify

### Build VS Code Extension
```
Rename root directory name to extension, add it to a zip file and change the file extension to .vsix
```
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