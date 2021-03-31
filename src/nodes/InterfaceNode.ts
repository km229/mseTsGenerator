import * as type from "../types"
import {InterfaceDeclaration} from "ts-morph"
import {Class} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"

export class InterfaceNode extends FamixNode<InterfaceDeclaration, Class> {

    constructor(element: InterfaceDeclaration) {
        super(element, new Class(MSEDocument.getFamixRepository()), element.getSourceFile().getBaseName() + "#" + element.getName(), type.INTERFACE);
        InterfaceNode.components.push(this)
    }

    findNodes() {

        // Signatures
        // this.node.getProperties().forEach(attribute => {
        //     let attrElement = new AttributeNode(attribute)
        //     attrElement.parentNode = this
        //     this.addNode(attrElement)
        // })
        //
        // this.node.getMethods().forEach(node => {
        //     let attrElement = new MethodNode(node)
        //     attrElement.parentNode = this
        //     this.addNode(attrElement)
        // })

    }

    execute(): void {

        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        this.famixElement.setIsInterface(true)

        // Définition des modifiers
        this.node.getModifiers().forEach(modifier => {
            this.famixElement.addModifiers(modifier.getText())
        })

        super.execute()
    }
}
