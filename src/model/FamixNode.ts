import {FamixElement} from "./FamixElement"

export class FamixNode<NodeType, FamixType> extends FamixElement<FamixType> {

    private readonly _node: NodeType
    private readonly _nodes: FamixElement<any>[]

    constructor(tsNode: NodeType, famixElement: FamixType, id: string, type: string) {
        super(famixElement, id, type);
        this._node = tsNode
        this._nodes = []
    }

    // Method to search all nodes
    findNodes() {
        this._nodes.forEach(e => {
            e.findNodes()
        })
    }

    // Method to execute descendant nodes's configuration
    execute() {
        this._nodes.forEach(e => {
            e.execute()
        })
    }

    get nodes(): FamixElement<any>[] {
        return this._nodes;
    }

    get node(): NodeType {
        return this._node;
    }

    // Method to search a node in the tree of current node's descendants
    search(id: string, type: string): FamixElement<any> {
        let result = super.search(id, type)
        if (result != null) {
            return result
        }
        this._nodes.forEach(e => {
            let temp = e.search(id, type)
            if (null != temp) {
                result = temp
            }
        })
        return result
    }

    addNode(item: FamixElement<any>) {
        this.nodes.push(item)
    }

}