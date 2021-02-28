import * as ts from "ts-morph"
import {NamespaceDeclaration} from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import * as src from "./index"
import {NamespaceNode} from "./NamespaceNode";

export class FileNode extends src.FameNode<ts.SourceFile> {

    constructor(ctx: MSEDocument, node: ts.SourceFile) {
        let startNumber = node.getLineAndColumnAtPos(node.getPos())
        let endNumber = node.getLineAndColumnAtPos(node.getEnd())
        super(ctx, node, new Element(ctx.getNextId, "FileAnchor", [
            ["fileName", `'${node.getFilePath()}'`],
            ["startLine", String(startNumber.line)],
            ["endLine", String(endNumber.line)],
            ["startColumn", String(startNumber.column)],
            ["endColumn", String(endNumber.column)],
        ]))
    }

    explore(): void {

        // this._node.getFunctions().forEach(node =>{
        //     console.log(node.getText())
        // })

        this._node.getNamespaces().forEach(node => {
            this._nodeList.push(new NamespaceNode(this._ctx, node as NamespaceDeclaration))
        })

        this._node.getClasses().forEach(node => {
            this._nodeList.push(new src.ClassNode(node as ts.ClassDeclaration, this._ctx))
        })

        // this._node.getInterfaces().forEach(interface => {
        //     this._nodeList.push(new src.ClassNode(node as ts.ClassDeclaration, this._ctx))
        // })

        /*this._node.forEachChild(node => {
            switch (node.getKind()){
                case ts.SyntaxKind.ClassDeclaration:
                    this._nodeList.push(new src.ClassNode(node as ts.ClassDeclaration, this._ctx))
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
        })*/
    }

}

