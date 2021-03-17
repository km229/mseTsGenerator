import {ParameterDeclaration} from "ts-morph"
import {Parameter} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";

export class ParameterNode extends FamixNode<ParameterDeclaration, Parameter> {

    constructor( parametre : ParameterDeclaration) {
        let famixParameter = new Parameter(MSEDocument.getFamixRepository())
        super(parametre, famixParameter);
    }

    execute() : void{
        this.famixElement.setName(this._node.getName())
        //this.famixElement.setDeclaredType()
        //this.famixElement.setParentBehaviouralEntity()
        //this.famixElement.setSourceAnchor()
    }
}