import {ParameterDeclaration} from "ts-morph"
import {Parameter} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {IndexedFileAnchorElement} from "../elements/IndexedFileAnchorElement";

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

        let index = new IndexedFileAnchorElement(this.name, this.famixElement, this.node.getPos(), this.node.getEnd())
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        this.famixElement.setParentBehaviouralEntity(this.parentNode.famixElement)

    }
}