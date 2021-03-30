import * as type from "../types"
import {PropertyDeclaration} from "ts-morph"
import {Attribute} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {IndexedFileAnchorElement} from "../elements"

export class AttributeNode extends FamixNode<PropertyDeclaration, Attribute> {

    constructor(element: PropertyDeclaration) {
        super(element, new Attribute(MSEDocument.getFamixRepository()),
            element.getSourceFile().getFilePath() + "#" + element.getName(), type.ATTRIBUTE);
    }

    findNodes() {
        let index = new IndexedFileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement, this.node.getPos(), this.node.getEnd())
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)
    }

    execute(): void {

        // Define name
        this.famixElement.setName(this.node.getName())

        // Define declaredType
        // TODO - Correct
        //this.setDeclaredType()

        this.famixElement.setParentType(this.parentNode.famixElement)

        this.node.getModifiers().forEach(modifier => {
            if (modifier.getText() == 'static') {
                this.famixElement.setHasClassScope(true)
            }
        })
        super.execute()

    }

    // TODO - Change
    setDeclaredType(): void {
        if (!this.node.getType().isAny()) {
            // Classes existantes
            let searchedNode = MSEDocument.getProject().search(this.node.getSourceFile().getBaseName() + "#" + this.famixElement.getName(), type.CLASS)
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
                return
            }
            // Types primitifs
            searchedNode = MSEDocument.getProject().search(this.node.getType().getText(), `${this.node.getType().getText()}`)
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }

}

