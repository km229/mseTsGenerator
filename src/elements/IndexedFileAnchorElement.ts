import {IndexedFileAnchor, SourcedEntity} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixElement} from "../model/FamixElement"

export class IndexedFileAnchorElement extends FamixElement<IndexedFileAnchor> {

    _sourcedEntity: SourcedEntity
    _start: number
    _end: number

    constructor(name: string, element: SourcedEntity, startPos: number, endPos: number) {
        super(new IndexedFileAnchor(MSEDocument.getFamixRepository()), name, 'IndexedFileAnchor')
        this._sourcedEntity = element
        this._start=startPos
        this._end=endPos
    }

    execute(): void {
        this.famixElement.setFileName(this.id)
        this.famixElement.setElement(this._sourcedEntity)
        this.famixElement.setStartPos(this._start)
        this.famixElement.setEndPos(this._end)
    };


}

