'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.register', sendAndFocus("fission register")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.login', sendAndFocus("fission login")));

  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.up', sendAndFocus("fission up")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.upFile', runCommandOnFile("fission up")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.upFolder', runCommandOnFolder("fission up")));

  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.watch', sendAndFocus("fission watch")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.watchFile', runCommandOnFile("fission watch")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.watchFolder', runCommandOnFolder("fission watch")));
}

/**
 * Runs a given command with the current file path as an argument
 */
const runCommandOnFile = (command: string) => () => {
  const uri = getOpenFileURI();
  if (uri) {
    sendAndFocus(`${command} ${uri.fsPath}`)();
  }
};

/**
 * Runs a given command with the current folder path as an argument
 */
const runCommandOnFolder = (command: string) => () => {
  const uri = getOpenFileURI();
  if (uri) {
    const folderPath = uri.fsPath.split('/').slice(1, -1).join('/');
    sendAndFocus(`${command} /${folderPath}`)();
  }
};

/**
 * Gets the current URI of the open text editor
 */
const getOpenFileURI = () => {
  const activeTextEditor = vscode.window.activeTextEditor;
  if (activeTextEditor) {
    return activeTextEditor.document.uri;
  } else {
    vscode.window.showErrorMessage('No editor active');
    return undefined;
  }
};

/**
 * Opens a terminal and sends it a command
 */
const sendAndFocus = (command: string) => () => {
  const terminal = quickGetTerminal();
  if (terminal) {
    terminal.show(true);
    terminal.sendText(command);
    vscode.window.showInformationMessage(`Successfully ran ${command}`);
  } else {
    vscode.window.showErrorMessage('Uh oh! No active terminals found...');
  }
};

/**
 * Quickly get an existing terminal or open a new one in the case one doesn't exist
 */
function quickGetTerminal(): vscode.Terminal | undefined {
  const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
  return terminals.length > 0
    ? terminals[0]
    : vscode.window.createTerminal("Fission");
}
