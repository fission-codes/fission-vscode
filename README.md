# Fission Live from VSCode
<img src="assets/logo.png" alt="drawing" width="150"/>

Fission Live lets you instantly update files, directories and obviously websites directly to IPFS and serve them anywhere. This lets us all quickly collaborate on projects, instantly share files from the CLI all in a way that's open by default, fast and available across the planet.

## Features

### Fission Up
<img src="assets/demo.gif" alt="drawing"/>
Push a your project or an individual folder or file to IPFS and share it easily using a fission domain. E.g. `yourusername.fission.app`

### Fission Watch
The same as fission up, however we keep an eye on your local changes and up date your fission site to always point at your latest version.

### Fission Register
We issue you a username and password and create a `.fission.yaml` in your home directory that stores them for you.

### Fission Login
_Login to an existing account

## Requirements

Fission is your toolkit for easily interfacing with IPFS. To get started, you'll need to install IPFS as well as the Fission CLI tool.

### Installing IPFS

We recommend the [ipfs-desktop client](https://github.com/ipfs-shipyard/ipfs-desktop) especially if you are new to IPFS. You can drag and drop files, browse your local IPFS files visually, and even integrate a shortcut for taking screenshots and auto-uploading them to IPFS.

The IPFS daemon starts automatically when you run the desktop.

If you're on Mac with Homebrew, the simple one-liner for installing ipfs is:

```bash
brew install ipfs
```

To start the local IPFS daemon:

```bash
brew services start ipfs
```

Check the [Fission Installation Guide](https://guide.fission.codes/installation) for extended instructions for all platforms.

### Installing Fission

#### MacOS
```bash
brew tap fission-suite/fission
brew install fission-cli
```

#### Linux / Windows Subsystem

```bash
# Download our binary
curl
\ https://github.com/fission-suite/web-api/releases/download/1.16.0/deb-cli
\ -o fission-cli

# Give it executable permission
sudo chmod +x ./fission-cli

# And move the file to your PATH:
sudo mv ./fission-cli /usr/local/bin/fission
```

That's it! Double check that it's installed correctly:

```bash
fission --help
```


## Known Issues
Unfortunately you will not be able to run fission commands if the current editor is not a text editor. This could be images or binary files.

