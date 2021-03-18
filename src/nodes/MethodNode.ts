import {MethodDeclaration} from "ts-morph"
import {Method} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ParameterNode} from "./ParameterNode";

export class MethodNode extends FamixNode<MethodDeclaration, Method> {

    constructor(methode : MethodDeclaration) {
        super(methode, new Method(MSEDocument.getFamixRepository()), methode.getName(), 'Method');
    }


    execute() : void {
        this.famixElement.setName(this.node.getName())

        //Nombre de paramètres dans la méthode
        let nbParameter =0;
        this.node.getParameters().forEach(parameter=>{
            nbParameter++
            this.add(new ParameterNode(parameter))
        })
        this.famixElement.setNumberOfParameters(nbParameter);

        //this.famixElement.setCyclomaticComplexity(complex.calculateCyclomaticComplexity(this.node.getText()))
        //this.famixElement.setNumberOfStatements(this.node.getEndLineNumber() - this.node.getStartLineNumber())
        //this.famixElement.setKind(this._node.getKind().toString())

        //const parent = this._node.getSourceFile();
        //const path = parent.getFilePath();
        //const complexity = calculateCyclomaticComplexity(path);
        //this.famixElement.setCyclomaticComplexity(complexity);

        //this.search(this._node.getParent().getText(),this._node.getParent().getType().toString())

        //this.famixElement.setParentType()
        //this.famixElement.setSourceAnchor()

        super.execute()
    }
}
