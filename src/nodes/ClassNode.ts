
import * as src from "./index"
import {ClassDeclaration} from "ts-morph";

export class ClassNode extends src.Node {

    constructor(node: ClassDeclaration, ctx: src.MSEDocument) {
        super(node, ctx)
    }

    explore(): void {
    }

    toMSE(): string {
        return "";
    }

}