/* --------------------------------------------------------------------------------------------
 * Copyright (c) 2020 Tomas Öberg 
 * Built from the example provided by Microsoft and licensed under the MIT License. 
 * See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import * as net from 'net';
import * as path from 'path';
import * as vscode from 'vscode';

import { LanguageClient, LanguageClientOptions, ServerOptions, StreamInfo, Trace } from 'vscode-languageclient';

const main: string = 'org.eclipse.xtext.ide.server.ServerLauncher';

export function activate(context: vscode.ExtensionContext) {
	console.log('The Inform6 language tools extension is now being activated');
	const { JAVA_HOME } = process.env;
	console.log(`Using java from JAVA_HOME: ${JAVA_HOME}`);
	if (JAVA_HOME) {
		let excecutable: string = path.join(JAVA_HOME, 'bin', 'java');
		let classPath = path.join(__dirname, '..', 'launcher', 'launcher.jar');
		const args: string[] = ['-cp', classPath];

		// The server is a started as a separate app and listens on port 5007
		// It is used purely for debugging with socket server running in eclipse 
		/*
		let connectionInfo = { port: 5007 };
		let serverOptions = () => {
			// Connect to language server via socket
			let socket = net.connect(connectionInfo);
			let result: StreamInfo = {
				writer: socket,
				reader: socket
			};
			return Promise.resolve(result);
		};
		*/

		// Regular java launcher
		// Set the server options 
		// -- java execution path
		// -- argument to be pass when executing the java command
		let serverOptions: ServerOptions = {
			command: excecutable,
			args: [...args, main],
			options: {
			}
		};

		let clientOptions: LanguageClientOptions = {
			documentSelector: [{ scheme: 'file', language: 'inform6' }],
			//synchronize: { fileEvents: workspace.createFileSystemWatcher('**/*.*')},
		};

		let lc = new LanguageClient('inform6', 'Inform 6 Language Server', serverOptions, clientOptions);
		lc.trace = Trace.Verbose;
		let disposable = lc.start();
		vscode.window.showInformationMessage('Inform 6 LSP client is activated');
		context.subscriptions.push(disposable);
	}
}

export function deactivate() { 
	console.log('"Inform 6 LSP client" extension is now deactivated!');
}