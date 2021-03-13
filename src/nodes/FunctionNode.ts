import {FunctionDeclaration} from "ts-morph"
import {Function} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";


export class FunctionNode extends FamixNode<FunctionDeclaration, Function> {

    constructor( fonction : FunctionDeclaration) {
        let famixFunction = new Function(MSEDocument.getFamixRepository())
        super(fonction, famixFunction);
    }


    execute() : void{

        this.famixElement.setName(this._node.getName())
        this.add(this.components);
    }
}

//
//     getNewIndexedFileAnchor(ref: number, node: Node): Element {
//         return new Element(this._ctx.getNextId, "IndexedFileAnchor", [
//             ["element", `(ref: ${ref})`],
//             ["startPos", String(node.getPos())],
//             ["endPos", String(node.getEnd())],
//             ["fileName", `'${node.getSourceFile().getFilePath()}'`],
//         ])
//     };
//
//     explore(): void {
//
//         // Add modifiers
//         if (this.hasModifiers(this._node)) {
//             this._element.addAttribute('modifiers', this.getModifiers(this._node))
//         }
//
//         let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
//         this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
//         this._elementList.push(fileAnchor)
//
//         this._node.forEachChild(MethodParam => {
//             let methodElement = new Element(this._ctx.getNextId, MethodParam.getKindName(), [
//                 ["name", `'${MethodParam.getText()}'`],
//                 ["parentType", `(ref: ${this._element.id})`],
//                 ["startPos", String(MethodParam.getPos())],
//                 ["endPos", String(MethodParam.getEnd())],
//             ])
//             this._elementList.push(methodElement);
//         })
//
//     }
// }