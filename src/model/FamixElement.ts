import {Component} from "./Component"
import {FileNode} from "../nodes";

export abstract class FamixElement<FamixType> implements Component {

    private static _components: FamixElement<any>[] = []
    private readonly _famixElement: FamixType
    private _type: string
    private _id: string
    private _parentNode: FamixElement<any>

    private _sourceFileNode: FileNode

    protected constructor(famixElement: FamixType, id: string, type: string) {
        this._id = id
        this.type = type
        this._famixElement = famixElement
    }

    get sourceFileNode(): FileNode {
        return this._sourceFileNode;
    }

    set sourceFileNode(value: FileNode) {
        this._sourceFileNode = value;
    }

    // To search inside execute() only
    static searchByType(id: string): FamixElement<any> {
        this.components.forEach(node => {
            if (-1 !== node.id.indexOf(id)) {
                return node
            }
        })
        return null
    }

    findNodes(): void {
        return null
    }

    static get components(): FamixElement<any>[] {
        return this._components;
    }

    static set components(value: FamixElement<any>[]) {
        this._components = value;
    }

    abstract execute();

    // To search inside execute() only
    search(id: string, type: string): FamixElement<any> {
        if (this.id.indexOf(id) !== -1 && this.type.indexOf(type) !== -1) {
            return this
        }
        return null
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get parentNode(): FamixElement<any> {
        return this._parentNode;
    }

    set parentNode(value: FamixElement<any>) {
        this._parentNode = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get famixElement(): FamixType {
        return this._famixElement;
    }
}
