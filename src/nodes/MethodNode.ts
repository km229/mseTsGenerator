import type from '../types'
import {MethodDeclaration} from "ts-morph"
import {Method} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ParameterNode} from "./ParameterNode"
import {FileAnchorElement} from "../elements"

export class MethodNode extends FamixNode<MethodDeclaration, Method> {

    nbParameter: number

    constructor(methode: MethodDeclaration) {
        super(methode, new Method(MSEDocument.getFamixRepository()), methode.getName(), type.METHOD);
        this.nbParameter = 0;
    }

    findNodes() {
        // Ajout des paramètres de la méthode
        this.node.getParameters().forEach(parameter => {
            this.nbParameter++
            let element = new ParameterNode(parameter)
            element.parentNode = this
            this.addNode(element)
        })

        // Définition du type du noeu parent
        // TODO - Clarify Access
        // let access = new AccessElement(this.node.getSourceFile().getFilePath(),this.famixElement)
        // access.execute()
    }

    execute(): void {
        // Définition du nom
        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        // Définition du nombre de paramètres
        this.famixElement.setNumberOfParameters(this.nbParameter)

        // Definition de la complexité cyclomatique
        let complexity = MSEDocument.getMetricService().getCyclomaticComplexity(this.node);
        this.famixElement.setCyclomaticComplexity(complexity);

        // Définition du type du noeu parent
        this.famixElement.setParentType(this.parentNode.famixElement)

        // Définition d'un anchor pour positionner l'élément
        let startNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getPos())
        let endNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getEnd())
        let index = new FileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement, startNumber.line, endNumber.line, startNumber.column, endNumber.column)
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        // Définition des descendants
        super.execute()
    }
}
