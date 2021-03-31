import * as type from '../types'
import {NamespaceDeclaration} from "ts-morph"
import {Namespace} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ClassNode} from "./ClassNode";
import {InterfaceNode} from "./InterfaceNode";
import {FunctionNode} from "./FunctionNode";

const KIND_ATTRIBUTE_NUMBER = 232

export class NamespaceNode extends FamixNode<NamespaceDeclaration, Namespace> {

    constructor(namespace: NamespaceDeclaration) {
        super(namespace, new Namespace(MSEDocument.getFamixRepository()), namespace.getName(), type.NAMESPACE)
        NamespaceNode.components.push(this)
    }

    findNodes() {
        //Search classes
        this.node.getClasses().forEach(node => {
            let element = new ClassNode(node)
            element.sourceFileNode = this.sourceFileNode
            this.addNode(element)
        })
        this.node.getInterfaces().forEach(node => {
            let element = new InterfaceNode(node)
            element.sourceFileNode = this.sourceFileNode
            this.addNode(element)
        })
        //Search functions
        this.node.getFunctions().forEach(node => {
            let element = new FunctionNode(node)
            element.sourceFileNode = this.sourceFileNode
            this.addNode(element)
        })
        //TODO - Search imports
        //this.getImports(this.node.getImportDeclarations())
        //Search namespaces
        this.node.getNamespaces().forEach(node => {
            this.addNode(new NamespaceNode(node))
        })
        //Search in descendants
        super.findNodes();
    }

    execute(): void {
        //Définition du nom
        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        let nbAttributes = 0
        this.node.getStatements().forEach(statement => {
            if (statement.getKind() == KIND_ATTRIBUTE_NUMBER) {
                nbAttributes++
            }
        })
        this.famixElement.setNumberOfAttributes(nbAttributes)
        super.execute()
    }

}

