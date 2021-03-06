// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { window, commands, ExtensionContext ,workspace} from 'vscode';
import { getSelectedText,addTagToSelectedText } from './functions';
import { basename } from 'path';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "helloworld" is now active!');
  // Create a status bar item

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let helloWorldCommand = commands.registerCommand('extension.helloWorld', () => {
    // The code you place here will be executed every time your command is executed
    let tags = getSelectedText();
    // Display a message box to the user
    window.showInformationMessage(`Hello VS Code! ${tags}`);
  });
  let htmlTagWrapperCommand = commands.registerCommand('extension.htmlTagWrapper', () => {
    // The code you place here will be executed every time your command is executed
    // let tags = getSelectedText();
    let tags = addTagToSelectedText();
    
    // Display a message box to the user
    window.showInformationMessage(`tag inserted`);
  });

  context.subscriptions.push(helloWorldCommand);
  context.subscriptions.push(htmlTagWrapperCommand);
}

// this method is called when your extension is deactivated
export function deactivate() {}
