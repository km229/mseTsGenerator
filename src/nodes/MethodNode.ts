import {MethodDeclaration} from "ts-morph"
import {Method} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";


export class MethodNode extends FamixNode<MethodDeclaration, Method> {

    constructor( methode : MethodDeclaration) {
        let famixMethod = new Method(MSEDocument.getFamixRepository())
        super(methode, famixMethod);
    }


    execute() : void{
        this.famixElement.setName(this._node.getName())
        this.add(this.components);
    }
}
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