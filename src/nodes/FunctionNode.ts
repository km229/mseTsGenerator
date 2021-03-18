import {FunctionDeclaration} from "ts-morph"
import {Function} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ParameterNode} from "./";


export class FunctionNode extends FamixNode<FunctionDeclaration, Function> {

    constructor( fonction : FunctionDeclaration) {
        super(fonction, new Function(MSEDocument.getFamixRepository()), fonction.getName(), "Function");
    }


    execute() : void{
        this.famixElement.setName(this.node.getName())
        this.famixElement.setNumberOfStatements(this.node.getEndLineNumber() - this.node.getStartLineNumber())
        let nbParameter =0;
        this.node.getParameters().forEach(parameter=>{
            nbParameter++
            this.add(new ParameterNode(parameter))
        })
        if (nbParameter!=0) {this.famixElement.setNumberOfParameters(nbParameter)};

        super.execute()
    }
}