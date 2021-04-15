import type from '../types'
import {FamixElement} from "../model/FamixElement"
import {PrimitiveType} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"

export class PrimitiveElement extends FamixElement<PrimitiveType> {

    constructor(primitiveName: string) {
        super(new PrimitiveType(MSEDocument.getFamixRepository()), "#" + primitiveName, type.PRIMITIF);
    }

    execute() {
        this.famixElement.setName(this.id.substring(1))
    }
}