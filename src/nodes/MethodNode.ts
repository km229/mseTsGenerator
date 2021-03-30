import {MethodDeclaration} from "ts-morph"
import {Method} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {ParameterNode} from "./ParameterNode";
import {FileAnchorElement} from "../elements/FileAnchorElement";
import { AccessElement } from "../elements/AccessElement";

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

        let startNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getPos())
        let endNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getEnd())
        let index = new FileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement,startNumber.line,endNumber.line,startNumber.column,endNumber.column)
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        let acces = new AccessElement(this.node.getSourceFile().getFilePath(),this.famixElement)
            acces.execute()

        super.execute()
    }
}
