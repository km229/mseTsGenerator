import * as type from "../types"
import {ImportDeclaration, SourceFile} from "ts-morph"
import {File} from "../../lib/pascalerni/model/file"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ClassNode, FunctionNode} from "../nodes"
import {NamespaceNode} from "./NamespaceNode"

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
        //Search functions
        this.node.getFunctions().forEach(node => {
            let element = new FunctionNode(node)
            element.sourceFileNode = this
            this.addNode(element)
        })
        //TODO - Search imports
        //this.getImports(this.node.getImportDeclarations())

        this.node.getNamespaces().forEach(node => {
            this.add(new NamespaceNode (node))
         })

        //Search namespaces
        // this._node.getNamespaces().forEach(node => {
        //     this._element.push(new NamespaceNode(this._ctx, node as NamespaceDeclaration))
        // })
        //Search in descendants
        super.findNodes();
    }

    getImports(imports: ImportDeclaration[]): void {
        imports.forEach(imp => {
            if (imp.getNamespaceImport() != undefined) {

            } else if (imp.getNamedImports().length !== 0) {

            } else {
                imp.getDefaultImport()
            }
        })
    }

    execute(): void {

        this.famixElement.setName(this.node.getBaseName())

        super.execute()
    }

}

