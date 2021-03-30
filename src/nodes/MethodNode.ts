import {MethodDeclaration} from "ts-morph"
import {Method} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ParameterNode} from "./ParameterNode";
import {IndexedFileAnchorElement} from "../elements/IndexedFileAnchorElement";

export class MethodNode extends FamixNode<MethodDeclaration, Method> {

    constructor(methode: MethodDeclaration) {
        super(methode, new Method(MSEDocument.getFamixRepository()), methode.getName(), 'Method');
    }

    findNodes() {
    }

    execute(): void {
        this.famixElement.setName(this.node.getName())

        //Nombre de paramètres dans la méthode
        let nbParameter = 0;
        this.node.getParameters().forEach(parameter => {
            nbParameter++
            let element = new ParameterNode(parameter)
            element.parentNode = this
            this.addNode(element)
        })
        this.famixElement.setNumberOfParameters(nbParameter);

        //this.famixElement.setNumberOfStatements(this.node.getEndLineNumber() - this.node.getStartLineNumber())
        //this.famixElement.setKind(this._node.getKind().toString())

        let complexity = MSEDocument.getMetricService().getCyclomaticComplexity(this.node);
        this.famixElement.setCyclomaticComplexity(complexity);

        this.famixElement.setParentType(this.parentNode.famixElement)

        let index = new IndexedFileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement, this.node.getPos(), this.node.getEnd())
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        super.execute()
    }
}
