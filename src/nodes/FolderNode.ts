import {Folder} from "famix/dist/model/file";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {Directory} from "ts-morph";

export class FolderNode extends FamixNode<Directory, Folder> {

    constructor(d: Directory) {
        let folder = new Folder(MSEDocument.getFamixRepository())
        super(d, folder);
        // let startNumber = node.getLineAndColumnAtPos(node.getPos())
        // let endNumber = node.getLineAndColumnAtPos(node.getEnd())
        // super(ctx, node, new Element(ctx.getNextId, "FileAnchor", [
        //     ["fileName", `'${node.getFilePath()}'`],
        //     ["startLine", String(startNumber.line)],
        //     ["endLine", String(endNumber.line)],
        //     ["startColumn", String(startNumber.column)],
        //     ["endColumn", String(endNumber.column)],
        // ]))
    }

    getNumberOfLinesOfText() {

    }

    execute(): void {

        // this._node.getFunctions().forEach(node =>{
        //     console.log(node.getText())
        // })
        //
        // this._node.getNamespaces().forEach(node => {
        //     this._element.push(new NamespaceNode(this._ctx, node as NamespaceDeclaration))
        // })
        //
        // this._node.getClasses().forEach(node => {
        //     this._element.push(new src.ClassNode(node as ts.ClassDeclaration, this._ctx))
        // })

    }

}

