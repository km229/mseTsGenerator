import {ClassDeclaration, ConstructorTypeNode} from "ts-morph"
import {Class} from "famix/dist/model/famix";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import { MethodNode } from "./";
import { ConstructorNode } from "./";

export class ClassNode extends FamixNode<ClassDeclaration, Class> {

    constructor(classe: ClassDeclaration) {
        let famixClass = new Class(MSEDocument.getFamixRepository())
        super(classe, famixClass);
    }

    execute(): void {
        this.famixElement.setName(this._node.getName())

        this._node.getMethods().forEach(node => {
            this.add(new MethodNode(node))
        })             
        this._node.getConstructors().forEach(node => {
            this.add(new ConstructorNode(node))
        }) 
        
        super.execute()
    }

}

