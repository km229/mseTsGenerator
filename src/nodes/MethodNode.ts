import {MethodDeclaration, ModifierableNode, Node,SyntaxKind} from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import {FameNode} from "./index"

export class MethodNode extends FameNode<MethodDeclaration> {

    constructor(node: MethodDeclaration, ctx: MSEDocument) {
        super(ctx, node, new Element(ctx.getNextId, "Method", [
            ['name', `'${node.getName()}'`],
            ["startPos", String(node.getPos())],
            ["endPos", String(node.getEnd())],
            ["fileName", `'${node.getSourceFile().getFilePath()}'`],
        ]))
    }

    getNewIndexedFileAnchor(ref: number, node: Node): Element {
        return new Element(this._ctx.getNextId, "IndexedFileAnchor", [
            ["element", `(ref: ${ref})`],
            ["startPos", String(node.getPos())],
            ["endPos", String(node.getEnd())],
            ["fileName", `'${node.getSourceFile().getFilePath()}'`],
        ])
    };

    getModifiers(node: ModifierableNode): string {
        let modifiers
        if(node.getModifiers().length > 0){
            modifiers=""
            node.getModifiers().forEach(modifier => {
                modifiers += `'${modifier.getText()}' `
            })
            modifiers=modifiers.slice(0, -1)
        }
        return modifiers
    }

    explore(): void {

        this.getModifiers(this._node)!=undefined ? this._element.addAttribute('modifiers', this.getModifiers(this._node)) : null

        let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
        this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
        this._elementList.push(fileAnchor)

        this._node.forEachChild(MethodParam => {
            let methodElement = new Element(this._ctx.getNextId, MethodParam.getKindName(),[
                ["name", `'${MethodParam.getText()}'`],
                ["parentType", `(ref: ${this._element.id})`],
                ["startPos", String(MethodParam.getPos())],
                ["endPos", String(MethodParam.getEnd())],
            ]) 
            this._elementList.push(methodElement);        
        })
        
    }
}