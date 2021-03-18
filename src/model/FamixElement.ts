import {Component} from "./Component"
import {FamixNode} from "./FamixNode";

export abstract class FamixElement<FamixType> implements Component {

    private readonly _famixElement: FamixType
    private _parentNode: FamixNode<any, any>

    protected constructor(fbe: FamixType, name?: string, type?: string) {
        this._famixElement = fbe
        this._name = name
        this._type = type
    }

    private _name: string

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _type: string

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get famixElement(): FamixType {
        return this._famixElement;
    }

    get parentNode(): FamixNode<any, any> {
        return this._parentNode;
    }

    set parentNode(value: FamixNode<any, any>) {
        this._parentNode = value;
    }

    abstract execute();

    abstract search(name: string, type: string): FamixElement<any>;

}