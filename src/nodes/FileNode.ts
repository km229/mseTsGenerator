
import * as src from "./index"
import {ClassDeclaration, SourceFile, ts} from "ts-morph"
import {Element} from "../model/Element";

export class FileNode extends src.Node<SourceFile> {

    constructor(ctx: src.MSEDocument, node: SourceFile) {
        super(ctx, node, new Element(ctx.getNextId, "FileAnchor", [
            ["fileName", node.getFilePath()],
            ["startLine", String(node.getStartLineNumber())],
            ["endLine", String(node.getEndLineNumber())],
        ]))
    }

    explore(): void {
        this._node.forEachChild(node => {
            switch (node.getKind()){
                case ts.SyntaxKind.ClassDeclaration:
                    this._nodeList.push(new src.ClassNode(node as ClassDeclaration, this._ctx))
                    break;
                case ts.SyntaxKind.InterfaceDeclaration:
                    break;
                case ts.SyntaxKind.ModuleDeclaration:
                    break;
                case ts.SyntaxKind.ImportDeclaration:
                    break;
                case ts.SyntaxKind.VariableStatement:
                    break;
            }
        })
    }

}
