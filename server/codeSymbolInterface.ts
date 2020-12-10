import { Location, Position, SymbolKind } from "vscode-languageclient";

//! 搜索模式
export enum ESearchMode {
    //! 精确匹配
    ExactlyEquals,

    //! 模糊搜索
    FuzzyMatch,

    //! 前序匹配
    PrefixMatch
}

//! 搜索范围
export enum ESearchRange {
    //! 全部符号
    AllSymbols,

    //! 全局符号
    GlobalSymbols,

    //! 局部符号
    LocalSymbols
}



//! 符号信息
export interface ISymbolInfo {

    //! 编辑器中展示的信息
    displayName: string

    //! 作为索引的信息  进行统一的格式转换
    /*! 
        variable ->  a.b.c    
        function ->  A.func
    */
    searchKey: string

    //! 符号的原始名字
    originalName: string

    //! 符号的类型
    kind: SymbolKind

    //! 符号的位置
    location: Location
}


//! teal 文件的信息
export class DocumentInfomation {

}



//! 获取符号信息的接口
export interface ICodeSymbol {

    //! 根据位置搜索符号
    searchSymbolByPosition(position: Position): ISymbolInfo

    //! 刷新文件的符号信息
    refreshDocumentSymbols(uri: string, forced: boolean, codeText?: string): void

    //! 刷新预设代码文件的符号信息
    refreshExternallyImportDocumentSysbols(uri: string, forced: boolean): void


}

