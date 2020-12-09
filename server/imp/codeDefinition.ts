import { Definition, TextDocumentPositionParams } from "vscode-languageclient";
import { ICodeDefinitions } from "../codeDefinitioninterface"
import * as Tool from "../codeTool";

export class CodeDefinition implements ICodeDefinitions {
    public getSymbalDefine(handler: TextDocumentPositionParams): Definition {
        return Tool.buildEmptyLocation('');
    }
}



