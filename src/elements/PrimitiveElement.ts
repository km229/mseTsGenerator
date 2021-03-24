import {FamixElement} from "../model/FamixElement";
import {PrimitiveType} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";

export class PrimitiveElement extends FamixElement<PrimitiveType>{

    constructor(primitiveName: string) {
        super(new PrimitiveType(MSEDocument.getFamixRepository()), primitiveName, primitiveName);
    }

    execute() {
        this.famixElement.setName(this.name)
    }

    search(name: string, type: string): FamixElement<any> {
        if(this.name.indexOf(name)!==-1 && this.type.indexOf(type)!==-1){
            return this
        }
        return null
    }


}