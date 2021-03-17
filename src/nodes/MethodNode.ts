import {MethodDeclaration} from "ts-morph"
import {Method} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import { ParameterNode } from "./";


export class MethodNode extends FamixNode<MethodDeclaration, Method> {

    constructor( methode : MethodDeclaration) {
        let famixMethod = new Method(MSEDocument.getFamixRepository())
        super(methode, famixMethod);
    }


    execute() : void {
        this.famixElement.setName(this._node.getName())
        this.famixElement.setNumberOfStatements(this._node.getEndLineNumber() - this._node.getStartLineNumber())
        //this.famixElement.setKind(this._node.getKind().toString())

        //const parent = this._node.getSourceFile();
        //const path = parent.getFilePath();
        //const complexity = calculateCyclomaticComplexity(path);
        //this.famixElement.setCyclomaticComplexity(complexity); 

        let nbParameter =0;
        this._node.getParameters().forEach(parameter=>{
            nbParameter++
            this.add(new ParameterNode(parameter))
        })
        if (nbParameter!=0) {this.famixElement.setNumberOfParameters(nbParameter)};
       
        //this.search(this._node.getParent().getText(),this._node.getParent().getType().toString())

        //this.famixElement.setParentType()
        //this.famixElement.setSourceAnchor()

        super.execute()
    }
}
