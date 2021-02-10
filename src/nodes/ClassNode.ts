
import * as src from "./index"
import {ClassDeclaration} from "ts-morph";
import {Element} from "../model/Element";
import {MSEDocument} from "./index";

export class ClassNode extends src.Node<ClassDeclaration> {

    constructor(node: ClassDeclaration, ctx: MSEDocument) {
        super(ctx, node, new Element(ctx.getNextId, "Class", [
            ['name', node.getName()]
        ]))
    }

    explore(): void {

        //Add fileAnchor for this class
        let fileAnchor = new Element(this._ctx.getNextId, "IndexedFileAnchor", [
            ["element", `(ref: ${this._element.id})`],
            ["startPos", String(this._node.getPos())],
            ["endPos", String(this._node.getEnd())],
            ["fileName", `'${this._node.getSourceFile().getFilePath()}`],
        ])
        this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
        this._elementList.push(fileAnchor)

        // Add modifiers
        if(this._node.getModifiers().length > 0){
            let modifiers = ""
            this._node.getModifiers().forEach(modifier => {
                modifiers += `'${modifier.getText()}'`
            })
            this._element.addAttribute('modifiers', modifiers)
        }
        // let extend= this._node.getExtends();
        // let implement = this._node.getImplements()
        // console.log(extend)
        // console.log(implement)
        // console.log(this._node.getDerivedClasses())
        // this._node.getInstanceMembers().forEach(attribut => {
        //     console.log(attribut)
        // })
        this._node.forEachChild(child => {
            let currentNode
            switch (child.getKind()){
                // case ts.SyntaxKind.HeritageClause:
                //     currentNode = new src.ClassNode(child as ClassDeclaration, this._ctx)
                //     this._nodeList.push(currentNode)
                //     break;
                // case ts.SyntaxKind.PublicKeyword:
                //     currentNode = new src.ClassNode(child as ClassDeclaration, this._ctx)
                //     this._nodeList.push(currentNode)
                //     break;
            }
            if(currentNode != undefined){
                currentNode.explore()
            }
            currentNode=undefined
        })
    }

}