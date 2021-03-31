import * as type from "../types"
import {FunctionDeclaration} from "ts-morph"
import {Function} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ParameterNode} from "../nodes"

export class FunctionNode extends FamixNode<FunctionDeclaration, Function> {

    nbParameter: number

    constructor(fonction: FunctionDeclaration) {
        super(fonction, new Function(MSEDocument.getFamixRepository()),
            fonction.getSourceFile().getBaseName() + "#" + fonction.getName(), type.FUNCTION)
        FunctionNode.components.push(this)
        this.nbParameter = 0
    }

    findNodes() {
        this.node.getParameters().forEach(parameter => {
            this.nbParameter++
            let element = new ParameterNode(parameter)
            element.parentNode = this
            this.addNode(element)
        })

        // Recherche au sein des noeuds enfants
        super.findNodes()
    }


    execute(): void {

        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        //this.famixElement.setNumberOfStatements(this.0.node.getEndLineNumber() - this.node.getStartLineNumber())
        if (this.nbParameter != 0) {
            this.famixElement.setNumberOfParameters(this.nbParameter)
        }
        ;

        let complexity = MSEDocument.getMetricService().getCyclomaticComplexity(this.node);
        this.famixElement.setCyclomaticComplexity(complexity);

        super.execute()
    }
}