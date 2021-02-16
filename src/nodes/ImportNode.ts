  

import {ImportDeclaration} from "ts-morph"
import {MSEDocument} from "../MSEDocument"
import {FameNode} from "./index"

export class ImportNode extends FameNode<ImportDeclaration> {

    constructor(ctx: MSEDocument, node: ImportDeclaration) {
        super(ctx, node)
    }

    toMSE(): string {
        return "";
    }

    explore(): void {
    }

}