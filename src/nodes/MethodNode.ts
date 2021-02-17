import {MethodDeclaration} from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import {FameNode} from "./index"


export class MethodNode extends FameNode<MethodDeclaration> {

    constructor(node: MethodDeclaration, ctx: MSEDocument) {
        super(ctx, node, new Element(ctx.getNextId, "Method", [
            ['name', `'${node.getName()}'`],
        ]))
    }

    explore(): void {

        // Add modifiers
        if(this.hasModifiers(this._node)){
            this._element.addAttribute('modifiers', this.getModifiers(this._node))
        }

        let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
        this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
        this._elementList.push(fileAnchor)

        this._node.getParameters().forEach(MethodParam => {
            let methodElement = new Element(this._ctx.getNextId, "Parameter",[
                ["name", `'${MethodParam.getText()}'`],
                ["parentBehaviouralEntity", `(ref: ${this._element.id})`],
            ]) 
            this._elementList.push(methodElement);        
        })
        
    }
}