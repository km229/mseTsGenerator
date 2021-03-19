import {SourceFile} from "ts-morph"
import {File} from "../lib/pascalerni/model/file"
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ClassNode, FunctionNode} from "./";

export class FileNode extends FamixNode<SourceFile, File> {

    constructor(sourceFile: SourceFile) {
        let file = new File(MSEDocument.getFamixRepository())
        super(sourceFile, file, sourceFile.getBaseName(), 'File');
    }

    execute(): void {

        this.famixElement.setName(this.node.getBaseName())

        this.node.getClasses().forEach(node => {
            this.add(new ClassNode(node))
        })

        this.node.getFunctions().forEach(node => {
            this.add(new FunctionNode(node))
        })

        //
        // this._node.getNamespaces().forEach(node => {
        //     this._element.push(new NamespaceNode(this._ctx, node as NamespaceDeclaration))
        // })

    }

    findAll(): void {
        super.execute()
    }

}

