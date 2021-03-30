import {ConstructorDeclaration} from "ts-morph"
import {Method} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ParameterNode} from "./";

export class ConstructorNode extends FamixNode<ConstructorDeclaration, Method> {

    constructor(constructeur: ConstructorDeclaration) {
        let famixMethod = new Method(MSEDocument.getFamixRepository())
        super(constructeur, famixMethod, constructeur.getText(), "Constructor");
    }

    findNodes() {
    }

    execute(): void {
        //TODO - Correct type problem
        //this.famixElement.setName(this.parentNode.type + ".constructor")
        //this.famixElement.setNumberOfStatements(this.node.getEndLineNumber() - this.node.getStartLineNumber())
        this.famixElement.setKind('constructor');

        //const parent = this.node.getSourceFile();
        //const path = parent.getFilePath();
        let complexity = MSEDocument.getMetricService().getCyclomaticComplexity(this.node);
        this.famixElement.setCyclomaticComplexity(complexity);

        let nbParameter = 0;
        this.node.getParameters().forEach(parameter => {
                nbParameter++
                let element = new ParameterNode(parameter)
            element.parentNode = this
            this.addNode(element)
            })
            this.famixElement.setNumberOfParameters(nbParameter);

            //this.famixElement.setSignature(this.node.getText())
        
            //this.famixElement.setParentType()
            //this.famixElement.setSourceAnchor()

            super.execute()
        }
}