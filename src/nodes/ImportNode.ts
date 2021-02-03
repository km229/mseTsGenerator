
import * as src from "./index"
import {ImportDeclaration} from "ts-morph"

export class ImportNode extends src.Node {

    _ctx: src.MSEDocument;
    _node: ImportDeclaration

    constructor(node: ImportDeclaration, ctx: src.MSEDocument) {
        super(node, ctx)
    }

    toMSE(): string {
        return "";
    }

    explore(): void {
    }

}