import {FamixNode} from "../model/FamixNode";
import {StructuralEntity} from "../../lib/pascalerni/model/famix";
import {MSEDocument} from "../model/MSEDocument";
import {TypedNode} from "ts-morph";

export class StructuralNode extends FamixNode<TypedNode, StructuralEntity> {

    constructor(node: TypedNode, structuralEntity: StructuralEntity, id: string, type: string) {
        super(node, structuralEntity, id, type);
    }

    setDeclaredType(): void {
        if (!this.node.getTypeNode().getType().isAny()) {
            // Classes existantes
            let searchedNode = MSEDocument.getProject().search('', `${this.node.getTypeNode().getType().getText()}#Class`)
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
                return
            }
            // Types primitifs
            searchedNode = MSEDocument.getProject().search(this.node.getTypeNode().getType().getText(), `${this.node.getTypeNode().getType().getText()}`)
            if (null != searchedNode) {
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }
}