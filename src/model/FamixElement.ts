import {Component} from "./Component"

export abstract class FamixElement<FamixType> implements Component {

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

    private _famixElement: FamixType

    get famixElement(): FamixType {
        return this._famixElement;
    }

    set famixElement(value: FamixType) {
        this._famixElement = value;
    }

    abstract execute();

    abstract search(name: string, type: string);

}