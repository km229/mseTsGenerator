import * as type from "../types"
import {SourceFile} from "ts-morph"
import {File} from "../../lib/pascalerni/model/file"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ClassNode, FunctionNode, InterfaceNode, NamespaceNode} from "../nodes"

export class FileNode extends FamixNode<SourceFile, File> {

    constructor(sourceFile: SourceFile) {
        super(sourceFile, new File(MSEDocument.getFamixRepository()), sourceFile.getFilePath(), type.FILE);
        FileNode.components.push(this)
    }

    findNodes() {
        //Search classes
        this.node.getClasses().forEach(node => {
            let element = new ClassNode(node)
            element.sourceFileNode = this
            this.addNode(element)
        })
        this.node.getInterfaces().forEach(node => {
            let element = new InterfaceNode(node)
            element.sourceFileNode = this
            this.addNode(element)
        })
        //Search functions
        this.node.getFunctions().forEach(node => {
            let element = new FunctionNode(node)
            element.sourceFileNode = this
            this.addNode(element)
        })
        //Search namespaces
        this.node.getNamespaces().forEach(node => {
            let element = new NamespaceNode(node)
            element.sourceFileNode = this
            this.addNode(element)
        })
        //Search in descendants
        super.findNodes();
    }

    execute(): void {
        this.famixElement.setName(this.node.getBaseName())
        super.execute()
    }
}

