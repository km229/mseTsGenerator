import {ConstructorDeclaration} from "ts-morph"
import {calculateCyclomaticComplexity} from "ts-complex"
import {Method} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import { ParameterNode } from "./";

export class ConstructorNode extends FamixNode<ConstructorDeclaration, Method> {

        constructor( constructeur : ConstructorDeclaration) {
            let famixMethod = new Method(MSEDocument.getFamixRepository())
            super(constructeur, famixMethod);
        }

        execute():void{
            //this.famixElement.setName(this._node.getFirstChild().toString()) 
            this.famixElement.setNumberOfStatements(this._node.getEndLineNumber() - this._node.getStartLineNumber())
            this.famixElement.setKind('constructor');

            //const parent = this._node.getSourceFile();
            //const path = parent.getFilePath();
            //const complexity = calculateCyclomaticComplexity(path);
            //this.famixElement.setCyclomaticComplexity(complexity); 

            let nbParameter =0;
            this._node.getParameters().forEach(parameter=>{
                nbParameter++
                this.add(new ParameterNode(parameter))
            })
            this.famixElement.setNumberOfParameters(nbParameter);

            //this.famixElement.setSignature(this._node.getText())
        
            //this.famixElement.setParentType()
            //this.famixElement.setSourceAnchor()

            super.execute()
        }
}