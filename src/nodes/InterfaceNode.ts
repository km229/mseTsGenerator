// import {FameNode} from "./FameNode";
// import {InterfaceDeclaration} from "ts-morph";
// import {MSEDocument} from "../MSEDocument";
// import {Element} from "../model/FamixElement";
//
// export class InterfaceNode extends FameNode<InterfaceDeclaration> {
//
//     constructor(node: InterfaceDeclaration, ctx: MSEDocument) {
//         super(ctx, node, new Element(ctx.getNextId, "Class", [
//             ['name', `'${node.getName()}'`],
//             ['isInterface', `'true'`],
//         ]))
//     }
//
//     explore(): void {
//     }
//
// }