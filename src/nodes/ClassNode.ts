import {ClassDeclaration} from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import {FameNode} from "./index"

export class ClassNode extends FameNode<ClassDeclaration> {

    constructor(node: ClassDeclaration, ctx: MSEDocument) {
        super(ctx, node, new Element(ctx.getNextId, "Class", [
            ['name', `'${node.getName()}'`],
        ]))
    }

    toMSE(): string {
        return "";
    }


    explore(): void {

        //Add fileAnchor for this class
        let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
        this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
        this._elementList.push(fileAnchor)

        // Add modifiers
        this.getModifiers(this._node) != undefined ? this._element.addAttribute('modifiers', this.getModifiers(this._node)) : null

        //Add attributes
        this._node.getProperties().forEach(prop => {

            let attrElement = new Element(this._ctx.getNextId, "Attribute", [
                ["name", `'${prop.getFirstChild().getText()}'`],
                //TODO - Recover declaredTypes
                //["declaredType", `'${prop.getType().getText()}'`],
                ["parentType", `(ref: ${this._element.id})`],
            ])
            this.getModifiers(prop) != undefined ? attrElement.addAttribute('modifiers', this.getModifiers(prop)) : null
            let propertyAnchor = this.getNewIndexedFileAnchor(attrElement.id, prop.getFirstChild())
            attrElement.addAttribute("sourceAnchor", `(ref: ${propertyAnchor.id})`)

            this._elementList.push(propertyAnchor)
            this._elementList.push(attrElement)

        })
    }

}