import * as type from '../types'
import {ParameterDeclaration} from "ts-morph"
import {Parameter} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {FileAnchorElement} from "../elements/FileAnchorElement";

export class ParameterNode extends FamixNode<ParameterDeclaration, Parameter> {

    constructor(parametre: ParameterDeclaration) {
        super(parametre, new Parameter(MSEDocument.getFamixRepository()), parametre.getName(), type.PARAMETER);
    }

    execute(): void {
        this.famixElement.setName(this.node.getName())

        // Define declaredType
        // TODO - Correct
        //this.setDeclaredType()

        let startNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getPos())
        let endNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getEnd())
        let index = new FileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement,startNumber.line,endNumber.line,startNumber.column,endNumber.column)
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        this.famixElement.setParentBehaviouralEntity(this.parentNode.famixElement)
    }

    // TODO - Change
    setDeclaredTypeFamix(): void {
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