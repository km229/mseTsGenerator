import {FunctionDeclaration} from "ts-morph"
import {Function} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import { ParameterNode } from "./";


export class FunctionNode extends FamixNode<FunctionDeclaration, Function> {

    constructor( fonction : FunctionDeclaration) {
        let famixFunction = new Function(MSEDocument.getFamixRepository())
        super(fonction, famixFunction);
    }


    execute() : void{
        this.famixElement.setName(this._node.getName())
        this.famixElement.setNumberOfStatements(this._node.getEndLineNumber() - this._node.getStartLineNumber())
        let nbParameter =0;
        this._node.getParameters().forEach(parameter=>{
            nbParameter++
            this.add(new ParameterNode(parameter))
        })
        if (nbParameter!=0) {this.famixElement.setNumberOfParameters(nbParameter)};

        super.execute()
    }
}