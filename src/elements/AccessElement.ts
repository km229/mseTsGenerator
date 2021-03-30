import {FamixElement} from "../model/FamixElement";
import {Access, BehaviouralEntity,Parameter} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";


export class AccessElement extends FamixElement<Access> {

    _accessAccessor : BehaviouralEntity
    _accessVariable : Parameter
    _accessIsWrite : boolean

    constructor(name: string, element: BehaviouralEntity) {
        super(new Access(MSEDocument.getFamixRepository()),name,'Access')
        this._accessAccessor = element
        //this._accessVariable = accesVariable
        this._accessIsWrite = true
    }


    execute() {
        this.famixElement.setAccessor(this._accessAccessor)
        //this.famixElement.setVariable(this._accessVariable)
        this.famixElement.setIsWrite(this._accessIsWrite)
        this.famixElement.setSourceAnchor(this._accessAccessor.getSourceAnchor())
    }


       search(name: string, type: string): FamixElement<any> {
        if(this.name.indexOf(name)!==-1 && this.type.indexOf(type)!==-1){
            return this
        }
        return null
    }
    
}