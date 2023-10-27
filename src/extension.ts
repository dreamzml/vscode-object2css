// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


const convertText = (selection: string | undefined) => {
	if(undefined=== selection){
		vscode.window.showInformationMessage('select is null');
		return '';
	}

	try{
		let rows:string[] = [];
		//const object = JSON.parse(selection.replace(/'/g, '"'));
		const object= eval(`(${selection})`);
		Object.entries(object).forEach(([key, value]) => {
			console.log(key, value);
			const newKey = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			rows.push(`"${newKey}": "${value}"`);
		});
		return `{${rows.join(', ')}}`;
	}catch(e){
		vscode.window.showInformationMessage('select is not object', `${e}`);
		return selection;
	}

	// for(const item of selection.split(';')) {
	// 	let [key, value] = item.split(":");
	// 	if(!key || !value) {
	// 		continue;
	// 	}

	// 	if(key.includes('-')) {
	// 		const index = key.indexOf('-');
	// 		key = `${key.slice(0, index)}${key[index + 1].toLocaleUpperCase()}${key.slice(index + 2)}`;
	// 	}

	// 	if(value.startsWith(' ')) {
	// 		value = value.slice(1);
	// 	}
		 
	// 	result += `${key}: '${value}',`;
	// }

};

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "object2css" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('object2css.object2css', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		const editor = vscode.window.activeTextEditor;
		if(!editor) {return;}
		const allSelections = editor.selections;

		editor.edit(editBuilder => {
			// 遍历并替换文本
			allSelections.forEach(selection => {
				const text = editor.document.getText(selection);
				editBuilder.replace(selection, convertText(text));
			});
		});
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
