import {FamixElement} from "../model/FamixElement";
import {PrimitiveType} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument";

export class PrimitiveElement extends FamixElement<PrimitiveType> {

    constructor(primitiveName: string) {
        super(new PrimitiveType(MSEDocument.getFamixRepository()), primitiveName, primitiveName);
    }

    execute() {
        this.famixElement.setName(this.id)
    }
}