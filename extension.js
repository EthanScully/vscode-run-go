
const vscode = require('vscode');

function activate(context) {

	terminal = vscode.window.createTerminal('Go'); // Names terminal instance

	let run = vscode.commands.registerCommand('run-go.run', function () {
		if (`${terminal.exitStatus}` == '[object Object]') { // if terminal is manually stoped, new instance is created
			terminal = vscode.window.createTerminal('Go');
		}		
		vscode.window.showInformationMessage('Compiling and running in temp directory'); // (Optional) Run Message
		const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath; // Retreives file path	
		terminal.sendText(`go run "${currentFilePath}"`, true); // Command to be sent
		terminal.show(); // Pull up Terminal
	});
	let compile = vscode.commands.registerCommand('run-go.compile', function () {	// WINDOWS ONLY
		if (`${terminal.exitStatus}` == '[object Object]') { // if terminal is manually stoped, new instance is created
			terminal = vscode.window.createTerminal('Go');
		}		
		vscode.window.showInformationMessage('Compiling and saving to current directory'); // (Optional) Run Message
		const currentFilePath = vscode.window.activeTextEditor.document.uri.fsPath; // Retreives file path
		const currentDirectory = currentFilePath.substring(0,currentFilePath.lastIndexOf("\\")+1); // Find File Directory
		const filename = currentFilePath.substring(currentFilePath.lastIndexOf("\\")+1,currentFilePath.lastIndexOf(".")); // Find file name
		terminal.sendText(`go build -o "${currentDirectory}" "${currentFilePath}" ; & "${currentDirectory}${filename}.exe"`, true); // Command to be sent
		terminal.show(); // Pull up Terminal
	});

	context.subscriptions.push(run);
	context.subscriptions.push(compile);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
