import * as vscode from 'vscode'; 

import PuppetLintProvider from './features/puppetLintProvider';

export function activate(context: vscode.ExtensionContext) {
    let linter = new PuppetLintProvider();  
    linter.activate(context.subscriptions);
    //vscode.languages.registerCodeActionsProvider('puppet', linter);
}