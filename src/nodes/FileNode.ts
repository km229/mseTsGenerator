
import * as ts from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import * as src from "./index"
import {SourceFile} from "ts-morph"

export class FileNode extends src.Node {

    constructor(node: SourceFile, ctx: src.MSEDocument) {
        super(node, ctx)
    }

    public checkNodes(){

    }

    public toMSE(): string {
        let result = src.def.OPEN_TOKEN+"\n"
        result += src.def.CLOSE_TOKEN;
        return result;
    }

    explore(): void {
    }


}

