import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('fissionCommand.setup', sendCommand("fission setup", false))
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('fissionCommand.whoami', sendCommand("fission whoami", true))
  );

  context.subscriptions.push(
    vscode.commands.registerCommand('fissionCommand.appRegister', sendCommand("fission app register", false))
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('fissionCommand.appInfo', sendCommand("fission app info", true))
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('fissionCommand.appPublish', sendCommand("fission app publish", true))
  );
  context.subscriptions.push(
    vscode.commands.registerCommand('fissionCommand.appPublishWatch', sendCommand("fission app publish --watch", true))
  );
}

/**
 * Open a terminal and send it a command
 */
const sendCommand = (command: string, preserveFocus: boolean) => () => {
  const terminal = getTerminal();
  if (terminal) {
    terminal.show(preserveFocus);
    terminal.sendText(command);
  } else {
    vscode.window.showErrorMessage('No active terminals found.');
  }
};

/**
 * Get an existing terminal or open a new one if none are open
 */
function getTerminal(): vscode.Terminal | undefined {
  const terminals = <vscode.Terminal[]>(<any>vscode.window).terminals;
  return terminals.length > 0
    ? terminals[0]
    : vscode.window.createTerminal("Fission");
}
