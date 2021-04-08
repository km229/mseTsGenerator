import * as type from "../types"
import {ImportDeclaration} from "ts-morph"
import {FamixNode} from "../model/FamixNode"

export class ImportNode extends FamixNode<ImportDeclaration, null> {

    constructor(importNode: ImportDeclaration) {
        super(importNode, null, "#" + importNode.getStartLineNumber(), type.IMPORT)
        ImportNode.components.push(this)
    }

    findNodes() {

    }


    execute(): void {
        super.execute()
    }
}