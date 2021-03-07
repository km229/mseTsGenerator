import {ClassDeclaration} from "ts-morph"
import {Class} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";

export class ClassNode extends FamixNode<ClassDeclaration, Class> {

    constructor(classe: ClassDeclaration) {
        let famixClass = new Class(MSEDocument.getFamixRepository())
        super(classe, famixClass);
        // let startNumber = node.getLineAndColumnAtPos(node.getPos())
        // let endNumber = node.getLineAndColumnAtPos(node.getEnd())
        // super(ctx, node, new Element(ctx.getNextId, "FileAnchor", [
        //     ["fileName", `'${node.getFilePath()}'`],
        //     ["startLine", String(startNumber.line)],
        //     ["endLine", String(endNumber.line)],
        //     ["startColumn", String(startNumber.column)],
        //     ["endColumn", String(endNumber.column)],
        // ]))
    }

    execute(): void {

        this.famixElement.setName(this._node.getName())

        // this._node.getClasses().forEach(node => {
        //     this.add(new ClassNode(node))
        // })
        //
        // //Add fileAnchor for this class
        // let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
        // this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
        // this._elementList.push(fileAnchor)
        //
        // // Add modifiers
        // this.getModifiers(this._node) != undefined ? this._element.addAttribute('modifiers', this.getModifiers(this._node)) : null
        //
        // //Add attributes
        // this._node.getProperties().forEach(prop => {
        //
        //     let attrElement = new Element(this._ctx.getNextId, "Attribute", [
        //         ["name", `'${prop.getFirstChild().getText()}'`],
        //         //TODO - Recover declaredTypes
        //         //["declaredType", `'${prop.getType().getText()}'`],
        //         ["parentType", `(ref: ${this._element.id})`],
        //     ])
        //     this.getModifiers(prop) != undefined ? attrElement.addAttribute('modifiers', this.getModifiers(prop)) : null
        //     let propertyAnchor = this.getNewIndexedFileAnchor(attrElement.id, prop.getFirstChild())
        //     attrElement.addAttribute("sourceAnchor", `(ref: ${propertyAnchor.id})`)
        //
        //     this._elementList.push(propertyAnchor)
        //     this._elementList.push(attrElement)
        //
        // })

    }

}

