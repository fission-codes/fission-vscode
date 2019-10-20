'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.register', sendAndFocus("fission register")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.login', sendAndFocus("fission login")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.up', sendAndFocus("fission up")));
  context.subscriptions.push(vscode.commands.registerCommand('fissionCommand.watch', sendAndFocus("fission watch")));
}

const sendAndFocus = (command: string) => () => {
  const terminal = quickGetTerminal()
  if (terminal) {
    terminal.show(true);
    terminal.sendText(command);
    vscode.window.showInformationMessage(`Successfully ran ${command}`);
  } else {
    vscode.window.showErrorMessage('Uh oh! No active terminals found...');
  }
}

function quickGetTerminal(): vscode.Terminal | undefined {
  const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
  return terminals.length > 0
    ? terminals[0]
    : vscode.window.createTerminal("Fission");;
}
