
import {ClassDeclaration, MethodDeclaration, ModifierableNode, Node,ConstructorDeclaration} from "ts-morph"
import {Element} from "../model/Element"
import {MSEDocument} from "../MSEDocument"
import { ConstructorNode } from "./ConstructorNode"
import {FameNode} from "./index"
import { MethodNode } from "./MethodNode"

export class ClassNode extends FameNode<ClassDeclaration> {

    constructor(node: ClassDeclaration, ctx: MSEDocument) {
        super(ctx, node, new Element(ctx.getNextId, "Class", [
            ['name', `'${node.getName()}'`],
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
            this._nodeList.push(new MethodNode(node as MethodDeclaration, this._ctx))
        })

        this._node.getConstructors().forEach(node =>{
            this._nodeList.push(new ConstructorNode(node as ConstructorDeclaration, this._ctx))
        })

        //Add methods

        //Add inheritance

        // let extend= this._node.getExtends();
        // let implement = this._node.getImplements()
        // console.log(extend)
        // console.log(implement)
        // console.log(this._node.getDerivedClasses())
        // this._node.getInstanceMembers().forEach(attribut => {
        //     console.log(attribut)
        // })
        // this._node.forEachChild(child => {
        //     let currentNode
        //     switch (child.getKind()){
        //         case ts.SyntaxKind.HeritageClause:
        //             currentNode = new src.ClassNode(child as ClassDeclaration, this._ctx)
        //             this._nodeList.push(currentNode)
        //             break;
        //         case ts.SyntaxKind.PublicKeyword:
        //             currentNode = new src.ClassNode(child as ClassDeclaration, this._ctx)
        //             this._nodeList.push(currentNode)
        //             break;
        //     }
        //     if(currentNode != undefined){
        //         currentNode.explore()
        //     }
        //     currentNode=undefined
        // })
    }

}