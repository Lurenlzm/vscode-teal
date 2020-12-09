import { ICodeDefinitions } from "./codeDefinitionInterface"
import { CodeDefinition } from "./imp/codeDefinition"


let _instance: ICodeDefinitions

//! 获取代码定义的实例
export function getCodeDefinitions(): ICodeDefinitions {
    if (!_instance) {
        _instance = new CodeDefinition();
    }
    return _instance;
}

