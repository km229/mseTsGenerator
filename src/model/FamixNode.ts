import {FamixElement} from "./FamixElement"

export class FamixNode<NodeType, FamixType> extends FamixElement<FamixType> {

    private readonly _node: NodeType
    private readonly _nodes: FamixElement<any>[]

    constructor(tsNode: NodeType, famixElement: FamixType, id: string, type: string) {
        super(famixElement, id, type);
        this._node = tsNode
        this._nodes = []
    }

    get nodes(): FamixElement<any>[] {
        return this._nodes;
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

    // Method to search a node in the tree of current node's descendants
    search(name: string, type: string): FamixElement<any> {
        let result = super.search(name, type)
        if (result != null) {
            return result
        }
        this._nodes.forEach(e => {
            let temp = e.search(name, type)
            if (null != temp) {
                result = temp
            }
        })
        return result
    }

    get node(): NodeType {
        return this._node;
    }

    addNode(item: FamixElement<any>) {
        this.nodes.push(item)
    }

}