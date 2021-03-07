import {FamixElement} from "./FamixElement";
import {Component} from "./Component";

export class FamixNode<NodeType, FamixType> extends FamixElement<FamixType> {

    _node: NodeType

    constructor(node: NodeType, element: FamixType, name?: string, type?: string) {
        super(element, name, type);
        this._node = node
        this._components = []
    }

    _components: FamixElement<any>[]

    get components(): any {
        return this._components;
    }

    set components(value: any) {
        this._components = value;
    }

    execute() {
        this._components.forEach(e => {
            e.execute()
        })
    }

    search(name: string, type: string) {
        this._components.forEach(comp => {
            if (name == comp.name && type == comp.type) {
                return comp
            }
            comp.search(name, type)
        })
    }

    add(item: Component) {
        this.components.push(item)
    }

    remove(item: Component) {
        this._components.filter(comp => comp != item)
    }

}