import * as vscode from "vscode";

import PuppetLintProvider from "./features/puppetLintProvider";
import PuppetParserProvider from "./features/puppetParserProvider";

export function activate(context: vscode.ExtensionContext) {

    let linter = new PuppetLintProvider();
    linter.activate(context.subscriptions);

    let parser = new PuppetParserProvider();
    parser.activate(context.subscriptions);
}