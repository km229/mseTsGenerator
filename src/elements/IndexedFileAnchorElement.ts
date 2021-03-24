import {FamixElement} from "../model/FamixElement";
import {IndexedFileAnchor, SourcedEntity} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";

export class IndexedFileAnchorElement extends FamixElement<IndexedFileAnchor> {

    _sourcedEntity: SourcedEntity
    _start: number
    _end: number

    constructor(name: string, element: SourcedEntity, startPos: number, endPos: number) {
        super(new IndexedFileAnchor(MSEDocument.getFamixRepository()), name, 'IndexedFileAnchor')
        this._sourcedEntity=element
        this._start=startPos
        this._end=endPos
    }

    execute(): void {
        this.famixElement.setFileName(this.name)
        this.famixElement.setElement(this._sourcedEntity)
        this.famixElement.setStartPos(this._start)
        this.famixElement.setEndPos(this._end)
    };

    search(name: string, type: string): FamixElement<any> {
        if(this.name.indexOf(name)!==-1 && this.type.indexOf(type)!==-1){
            return this
        }
        return null
    }

}

