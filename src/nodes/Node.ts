
import {MSEDocument} from "../MSEDocument"
import * as ts from "ts-morph"
import {def} from "./index"

export {MSEDocument} from "../MSEDocument"
export * as def from '../../constants'

export abstract class Node {

    _ctx: MSEDocument
    // Noeud courant
    _node: ts.Node
    // Liste des noeuds descendants
    _nodeList: Node[]
    //TODO - A rediscuter pour voir si on fait sous cette forme
    // Liste des éléments à ajouter au fichier MSE
    // [0: id, 1: type, 2: text]
    // ex: [0: 1, 1: "IndexedFileAnchor", 2: "(element (ref: 28))\n\t(endPos 46)\n\t(fileName './Car.java')\n\t(startPos 41)"]
    _mseList: string[][]

    protected constructor(node: ts.Node, ctx: MSEDocument) {
        this._node=node
        this._ctx=ctx
        this._nodeList=[]
        this.explore()
    }

    //TODO - A revoir
    toMSE(): string {
        let result = def.OPEN_TOKEN
        this._mseList.forEach(node => {
            result += def.FAMIX_PREFIX+`.${node[1]} (id: ${node[0]})\n\t`+node[2]
        })
        result += def.CLOSE_TOKEN;
        return result;
    }

    abstract explore(): void

    showTree(lvl?: string): string {
        let tree_lvl = lvl ? lvl : ""
        let tree = tree_lvl+ts.SyntaxKind[this._node.getKind()]+"\n"
        tree_lvl+="-"
        this._nodeList.forEach(node => {
            tree += node.showTree(tree_lvl)
        })
        return tree
    }
}