import {Inheritance} from "../../lib/pascalerni/model/famix"
import {FamixElement} from "../model/FamixElement";
import {MSEDocument} from "../model/MSEDocument";
import {ClassNode} from "../nodes";

export class InheritanceElement extends FamixElement<Inheritance>{
    private _sub: ClassNode
    private _super: ClassNode

    constructor(subClass: ClassNode, superClass: ClassNode) {
        super(new Inheritance(MSEDocument.getFamixRepository()), `${subClass.id}>${superClass.id}`, 'Inheritance');
        this._sub = subClass
        this._super = superClass
    }

    execute() {
        this.famixElement.setSubclass(this._sub.famixElement)
        this.famixElement.setSuperclass(this._super.famixElement)
    }

}