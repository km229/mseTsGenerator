
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import * as src from "./index"
import * as ts from "ts-morph"

export class ClassNode extends src.FameNode<ts.ClassDeclaration> {

    constructor(node: ts.ClassDeclaration, ctx: MSEDocument) {
        super(ctx, node, new Element(ctx.getNextId, "Class", [
            ['name', `'${node.getName()}'`],
        ]))
    }

    explore(): void {

        //Add fileAnchor for this class
        let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
        this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
        this._elementList.push(fileAnchor)

        // Add modifiers
        this.getModifiers(this._node)!=undefined ? this._element.addAttribute('modifiers', this.getModifiers(this._node)) : null

        //Add attributes
        this._node.getProperties().forEach(prop => {

            let attrElement = new Element(this._ctx.getNextId, "Attribute", [
                ["name", `'${prop.getFirstChild().getText()}'`],
                //TODO - Recover declaredTypes
                //["declaredType", `'${prop.getType().getText()}'`],
                ["parentType", `(ref: ${this._element.id})`],
            ])
            this.getModifiers(prop)!=undefined ? attrElement.addAttribute('modifiers', this.getModifiers(prop)) : null
            let propertyAnchor = this.getNewIndexedFileAnchor(attrElement.id, prop.getFirstChild())
            attrElement.addAttribute("sourceAnchor", `(ref: ${propertyAnchor.id})`)

            this._elementList.push(propertyAnchor)
            this._elementList.push(attrElement)

        })
        
        this._node.getInstanceMethods().forEach(node =>{
            this._nodeList.push(new src.MethodNode(node as ts.MethodDeclaration, this._ctx))
        })

        this._node.getConstructors().forEach(node =>{
            this._nodeList.push(new src.ConstructorNode(node as ts.ConstructorDeclaration, this._ctx))
        })

        //Add methods

        //Add inheritance


    }

}