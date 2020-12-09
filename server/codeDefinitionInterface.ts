import { Definition, TextDocumentPositionParams } from "vscode-languageclient";

//! 获取符号定义的接口
export interface ICodeDefinitions {

    //! 获取符号的定义 
    getSymbalDefine(handler: TextDocumentPositionParams): Definition;
}
