
import * as src from "./index"
import {PropertyDeclaration} from "ts-morph";

export class PropertyNode extends src.Node {

    constructor(node: PropertyDeclaration, ctx: src.MSEDocument) {
        super(node, ctx)
    }

    toMSE(): string {
        return "";
    }

    explore(): void {
    }

}