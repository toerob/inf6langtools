# inf6langtools

Inform 6 extension is a client for the ls4Inform Language Server that provides language utilities such as outliner, cross-reference etc. It is powered by the XText Framework.

## Installation

* Easiest: search for the extension in the vscode extension pane: "inf6langtools" and install it. 

_OR_:
 
 * Download the file https://github.com/toerob/inf6langtools/blob/master/inf6langtools-0.1.0-alpha.vsix
 * Install the plugin by opening the extension pane to the left, select the top bar menu button (...) and choose "Install from VSIX..."
 * Select the downloaded file and you are good to go

NOTE: Library folders (or any unexplicit include directive) will need to be referenced via comments with compiler directive include_path or language at the top of the source file, the same way done in inform source files, e.g:

!% +include_path=../../lib/,/usr/local/share/inform/lib/

The search paths can be both relative or absolute but cannot have any spaces separating them.

## Features 

The extension is bundled with an LSP implementation written in Java (with XText) that can be used with any editor supporting the Language Server Protocol 
Source code at: https://github.com/toerob/ls4inform6
 * Outliner with all objects 
 * Go to reference and find all references between included files via class name, direction properties (n_to, s_to etc) and attributes
 * Code syntax checks with warnings on wrongly typed object definitions.
 
## Disclaimer

This is not a fully featured language server yet. It is more or less an outliner in its current state, with additional bonus features such as cross-references.

## Requirements

Java JRE 10. 

## License and credit
The language Server for Inform 6 (bundled with this client and with source code available at: https://github.com/toerob/ls4inform6) is powered by the XText framework (https://www.eclipse.org/Xtext/index.html) licensed under the EPL 2.0 license (https://www.eclipse.org/legal/epl-2.0/). 

## Extension Settings

## Known Issues

## Release Notes

### 0.1.0
This is an alpha release made purely for the sake of it might already be useful to the IF community at the present stage. 

