# Fission VSCode

## Left to do
- [ ] Update Readme
- [ ] Publish to marketplace
- [ ] Allow watch and up to serve specific files or directories
- [ ] Add fission download


## VS Code API

### `vscode` module

- [window.createTerminal](https://code.visualstudio.com/api/references/vscode-api#window.createTerminal)
- [window.onDidChangeActiveTerminal](https://code.visualstudio.com/api/references/vscode-api#window.onDidChangeActiveTerminal)
- [window.onDidCloseTerminal](https://code.visualstudio.com/api/references/vscode-api#window.onDidCloseTerminal)
- [window.onDidOpenTerminal](https://code.visualstudio.com/api/references/vscode-api#window.onDidOpenTerminal)
- [window.Terminal](https://code.visualstudio.com/api/references/vscode-api#window.Terminal)
- [window.terminals](https://code.visualstudio.com/api/references/vscode-api#window.terminals)

### Proposed API

- `window.createTerminalRenderer`
- `window.TerminalRenderer`

### Contribution Points

- [`contributes.commands`](https://code.visualstudio.com/api/references/contribution-points#contributes.commands)

## Running the Sample

- Run `npm install` in terminal to install dependencies
- Run the `Run Extension` target in the Debug View. This will:
  - Start a task `npm: watch` to compile the code
  - Run the extension in a new VS Code window
