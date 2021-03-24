import {Inheritance} from "../lib/pascalerni/model/famix"
import {FamixElement} from "../model/FamixElement";
import {MSEDocument} from "../MSEDocument";
import {ClassNode} from "../nodes";

export class InheritanceElement extends FamixElement<Inheritance>{
    private _sub: ClassNode
    private _super: ClassNode

    constructor(subClass: ClassNode, superClass: ClassNode) {
        super(new Inheritance(MSEDocument.getFamixRepository()), `${subClass.name}>${superClass.name}`, 'Inheritance');
        this._sub = subClass
        this._super = superClass
    }

    execute() {
        this.famixElement.setSubclass(this._sub.famixElement)
        this.famixElement.setSuperclass(this._super.famixElement)
    }

    search(name: string, type: string): FamixElement<any> {
        if (this.name.indexOf(name) !== -1 && this.type.indexOf(type) !== -1) {
            return this
        }
        return null
    }

}