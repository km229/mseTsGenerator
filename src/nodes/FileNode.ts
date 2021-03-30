import * as type from "../types"
import {SourceFile} from "ts-morph"
import {File} from "../../lib/pascalerni/model/file"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ClassNode, FunctionNode} from "../nodes"

export class FileNode extends FamixNode<SourceFile, File> {

    constructor(sourceFile: SourceFile) {
        super(sourceFile, new File(MSEDocument.getFamixRepository()), sourceFile.getFilePath(), type.FILE);
        //FileNode.components.push(this)
    }

    findNodes() {
        //Search classes
        this.node.getClasses().forEach(node => {
            this.addNode(new ClassNode(node))
        })
        //Search functions
        this.node.getFunctions().forEach(node => {
            this.addNode(new FunctionNode(node))
        })
        //Search namespaces
        // this._node.getNamespaces().forEach(node => {
        //     this._element.push(new NamespaceNode(this._ctx, node as NamespaceDeclaration))
        // })
        //Search in descendants
        super.findNodes();
    }

    execute(): void {

        this.famixElement.setName(this.node.getBaseName())

        super.execute()
    }

}

