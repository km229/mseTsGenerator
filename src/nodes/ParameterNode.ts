import {ParameterDeclaration} from "ts-morph"
import {Parameter} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {FileAnchorElement} from "../elements/FileAnchorElement";

export class ParameterNode extends FamixNode<ParameterDeclaration, Parameter> {

    constructor(parametre : ParameterDeclaration) {
        super(parametre, new Parameter(MSEDocument.getFamixRepository()), parametre.getName(), 'Parameter');
    }


    setDeclaredType(): void {
        if(!this.node.getType().isAny()){
            // Classes existantes
            let searchedNode = MSEDocument.getProject().search('', `${this.node.getType().getText()}#Class`)
            if(null != searchedNode){
                this.famixElement.setDeclaredType(searchedNode.famixElement)
                return
            }
            // Types primitifs
            searchedNode = MSEDocument.getProject().search(this.node.getType().getText(), `${this.node.getType().getText()}`)
            if(null != searchedNode){
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }

    execute() : void{
        this.famixElement.setName(this.node.getName())

        // Define declaredType
        this.setDeclaredType()

        let startNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getPos())
        let endNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getEnd())
        let index = new FileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement,startNumber.line,endNumber.line,startNumber.column,endNumber.column)
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        this.famixElement.setParentBehaviouralEntity(this.parentNode.famixElement)

    }
}