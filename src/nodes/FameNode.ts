import {MSEDocument} from "../MSEDocument"
import {Node} from "ts-morph"
import {Element} from '../model/Element'

export abstract class FameNode<NodeType extends Node> {

    _ctx: MSEDocument
    // Noeud courant
    _node: NodeType
    _nodeList: FameNode<any>[]
    _element: Element
    _elementList: Element[]

    protected constructor(ctx: MSEDocument, node: NodeType, element?: Element) {
        this._node=node
        this._ctx=ctx
        this._element=element
        this._nodeList=[]
        this._elementList=[]
        this.explore()
    }

    toMSE(): string {
        let mse = ""
        this._nodeList.forEach(node => {
            mse += node.toMSE()
        })
        this._elementList.forEach(element => {
            mse += element.toMSE()
        })
        return mse += this._element.toMSE()
    }


    abstract explore() : void;

    showTree(node: Node = this._node, lvl: string = ""): string {
        let tree = `${lvl} ${node.getKindName()}\n`
        node.getChildren().forEach(child => {
            tree += this.showTree(child, lvl+"-")
        })
        return tree
    }
}