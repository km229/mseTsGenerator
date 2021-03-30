import * as type from '../types'
import {NamespaceDeclaration} from "ts-morph"
import {Namespace} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"

const KIND_ATTRIBUTE_NUMBER = 232

export class NamespaceNode extends FamixNode<NamespaceDeclaration, Namespace> {

    constructor(namespace: NamespaceDeclaration) {
        super(namespace, new Namespace(MSEDocument.getFamixRepository()), namespace.getName(), type.NAMESPACE)
        NamespaceNode.components.push(this)
    }

    findNodes() {
        this.node.getClasses()
        super.findNodes();
    }

    execute(): void {
        let nbAttributes = 0
        this.node.getStatements().forEach(statement => {
            if (statement.getKind() == KIND_ATTRIBUTE_NUMBER) {
                nbAttributes++
            }
        })
        this.famixElement.setName(this.node.getName())
        this.famixElement.setNumberOfAttributes(nbAttributes)
        super.execute()
    }

}

