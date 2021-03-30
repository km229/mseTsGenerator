import * as type from "../types"
import {ParameterDeclaration} from "ts-morph"
import {Parameter} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {IndexedFileAnchorElement} from "../elements"

export class ParameterNode extends FamixNode<ParameterDeclaration, Parameter> {

    constructor(parametre: ParameterDeclaration) {
        super(parametre, new Parameter(MSEDocument.getFamixRepository()), parametre.getName(), type.PARAMETER);
    }

    findNodes() {
        let index = new IndexedFileAnchorElement(this.id, this.famixElement, this.node.getPos(), this.node.getEnd())
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)
    }

    execute(): void {
        this.famixElement.setName(this.node.getName())

        // Define declaredType
        // TODO - Correct
        //this.setDeclaredType()

        this.famixElement.setParentBehaviouralEntity(this.parentNode.famixElement)
    }

    // TODO - Change
    setDeclaredType(): void {
        if (!this.node.getType().isAny()) {
            // Classes existantes
            let searchedNode = MSEDocument.getProject().search(this.node.getSourceFile().getBaseName() + "#" + this.famixElement.getName(), type.CLASS)
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
                return
            }
            // Types primitifs
            searchedNode = MSEDocument.getProject().search(this.node.getType().getText(), `${this.node.getType().getText()}`)
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }
}