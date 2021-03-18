import {FamixElement} from "./FamixElement";

export class FamixNode<NodeType, FamixType> extends FamixElement<FamixType> {

    private readonly _node: NodeType
    private _components: FamixElement<any>[]

    constructor(node: NodeType, element: FamixType, name: string, type: string) {
        super(element, name, type);
        this._node = node
        this._components = []
    }

    get components(): FamixElement<any>[] {
        return this._components;
    }

    set components(value: FamixElement<any>[]) {
        this._components = value;
    }

    execute() {
        this._components.forEach(e => {
            e.execute()
        })
    }

    search(name: string, type: string): FamixElement<any> {
        if(-1!==this.name.indexOf(name) && -1!==this.type.indexOf(type)){
            return this
        }
        let result=null
        this._components.forEach(e => {
            let temp = e.search(name, type)
            if(null != temp){
                result=temp
            }
        })
        return result
    }

    add(item: FamixElement<any>) {
        this.components.push(item)
    }

    remove(item: FamixElement<any>) {
        this._components.filter(comp => comp != item)
    }

    get node(): NodeType {
        return this._node;
    }

}