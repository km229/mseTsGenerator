import * as type from "../types"
import {PropertyDeclaration} from "ts-morph"
import {Attribute} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {FileAnchorElement} from "../elements"

export class AttributeNode extends FamixNode<PropertyDeclaration, Attribute> {

    constructor(element: any) {
        super(element, new Attribute(MSEDocument.getFamixRepository()),
            element.getSourceFile().getBaseName() + "#" + element.getName(), type.ATTRIBUTE);
    }

    execute(): void {

        // Define name
        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        // Definition du type de l'attribut
        this.setDeclaredTypeFamix()

        // Définition d'un anchor pour positionner l'élément
        this.famixElement.setParentType(this.parentNode.famixElement)

        // Définition d'un anchor pour positionner l'élément
        let startNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getPos())
        let endNumber = this.node.getSourceFile().getLineAndColumnAtPos(this.node.getEnd())
        let index = new FileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement, startNumber.line, endNumber.line, startNumber.column, endNumber.column)
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        // Définition du scope de l'attribut
        this.node.getModifiers().forEach(modifier => {
            if (modifier.getText() == 'static') {
                this.famixElement.setHasClassScope(true)
            }
        })

        // Définition des descendants
        super.execute()
    }

    setDeclaredTypeFamix(): void {
        if (!this.node.getType().isAny()) {
            // Recherche du type
            let searchedNode = MSEDocument.getProject().search("#" + this.node.getType().getText(), "")
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }
}

