import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import * as ts from "ts-morph"
import {NamespaceDeclaration} from "ts-morph"
import * as src from "./index"

export class NamespaceNode extends src.FameNode<ts.NamespaceDeclaration> {

    _namespaceId: string
    _isExported: boolean

    constructor(ctx: MSEDocument, node: NamespaceDeclaration) {
        super(ctx, node, new Element(ctx.getNextId, "Namespace", [
            ["name", `'node.getName()'`]
        ]))
        this._namespaceId = node.getName()
    }

    explore(): void {

    }

}

