// import {MethodDeclaration, Node} from "ts-morph"
// import {Element} from "../model/FamixElement"
// import {MSEDocument} from "../MSEDocument"
// import {FameNode} from "./index"
//
//
// export class MethodNode extends FameNode<MethodDeclaration> {
//
//     constructor(node: MethodDeclaration, ctx: MSEDocument) {
//         super(ctx, node, new Element(ctx.getNextId, "Function", [
//             ['name', `'${node.getName()}'`],
//             ["startPos", String(node.getPos())],
//             ["endPos", String(node.getEnd())],
//             ["fileName", `'${node.getSourceFile().getFilePath()}'`],
//         ]))
//     }
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