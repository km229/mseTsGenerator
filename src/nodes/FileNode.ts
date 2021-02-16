
import {ClassDeclaration, SourceFile, SyntaxKind} from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import * as src from "./index"

export class FileNode extends src.FameNode<SourceFile> {

    constructor(ctx: MSEDocument, node: SourceFile) {
        super(ctx, node, new Element(ctx.getNextId, "FileAnchor", [
            ["fileName", `'${node.getFilePath()}'`],
            ["startLine", String(node.getStartLineNumber())],
            ["endLine", String(node.getEndLineNumber())],
        ]))
    }

    explore(): void {
        this._node.forEachChild(node => {
            switch (node.getKind()){
                case SyntaxKind.ClassDeclaration:
                    this._nodeList.push(new src.ClassNode(node as ClassDeclaration, this._ctx))
                    break;
                case SyntaxKind.InterfaceDeclaration:
                    break;
                case SyntaxKind.ModuleDeclaration:
                    break;
                case SyntaxKind.ImportDeclaration:
                    break;
                case SyntaxKind.VariableStatement:
                    break;
            }
        })
    }

}

