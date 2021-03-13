import {SourceFile} from "ts-morph"
import {File} from "famix/dist/model/file";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ClassNode} from "./";

export class FileNode extends FamixNode<SourceFile, File> {

    constructor(sourceFile: SourceFile) {
        let file = new File(MSEDocument.getFamixRepository())
        super(sourceFile, file);
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

    execute(): void {

        this.famixElement.setName(this._node.getBaseName())
        this.famixElement.setNumberOfLinesOfText(this._node.getEndLineNumber() - this._node.getStartLineNumber())

        console.log("test1")
        this._node.getClasses().forEach(node => {
            this.add(new ClassNode(node))
            console.log("test")
        })

        this._node.getFunctions().forEach(node =>{
             console.log(node.getText())
         })
        //
        // this._node.getNamespaces().forEach(node => {
        //     this._element.push(new NamespaceNode(this._ctx, node as NamespaceDeclaration))
        // })

        super.execute()

    }

}

