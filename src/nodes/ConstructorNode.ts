//
// import {Element} from "../model/FamixElement"
// import {MSEDocument} from "../MSEDocument"
// import {FameNode} from "./index"
// import * as ts from "ts-morph"
//
// export class ConstructorNode extends FameNode<ts.ConstructorDeclaration> {
//
//     constructor(node: ts.ConstructorDeclaration, ctx: MSEDocument) {
//         super(ctx, node, new Element(ctx.getNextId, "Method", [
//             ['isConstructor', `true`],
//         ]))
//     }
//
//     explore(): void {
//
//         // Add modifiers
//         if(this.hasModifiers(this._node)){
//             this._element.addAttribute('modifiers', this.getModifiers(this._node))
//         }
//
//         let fileAnchor = this.getNewIndexedFileAnchor(this._element.id, this._node)
//         this._element.addAttribute("sourceAnchor", `(ref: ${fileAnchor.id})`)
//         this._elementList.push(fileAnchor)
//
//         this._node.getParameters().forEach(MethodParam => {
//             let methodElement = new Element(this._ctx.getNextId, "Parameter",[
//                 ["name", `'${MethodParam.getText()}'`],
//                 ["parentBehaviouralEntity", `(ref: ${this._element.id})`],
//             ])
//             this._elementList.push(methodElement);
//         })
//
//     }
// }