import {FunctionDeclaration} from "ts-morph"
import {Function} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {ParameterNode} from "../nodes"

export class FunctionNode extends FamixNode<FunctionDeclaration, Function> {

    nbParameter: number

    constructor(fonction: FunctionDeclaration) {
        super(fonction, new Function(MSEDocument.getFamixRepository()), fonction.getName(), "Function")
        this.nbParameter = 0
    }

    findNodes() {
        this.node.getParameters().forEach(parameter => {
            this.nbParameter++
            let element = new ParameterNode(parameter)
            element.parentNode = this
            this.addNode(element)
        })
    }


    execute(): void {
        this.famixElement.setName(this.node.getName())
        //this.famixElement.setNumberOfStatements(this.node.getEndLineNumber() - this.node.getStartLineNumber())
        if (this.nbParameter != 0) {
            this.famixElement.setNumberOfParameters(this.nbParameter)
        }
        ;

        let complexity = MSEDocument.getMetricService().getCyclomaticComplexity(this.node);
        this.famixElement.setCyclomaticComplexity(complexity);

        super.execute()
    }
}