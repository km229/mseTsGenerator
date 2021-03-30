import {FamixElement} from "../model/FamixElement";
import {FileAnchor, SourcedEntity} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";

export class FileAnchorElement extends FamixElement<FileAnchor> {

    _sourcedEntity: SourcedEntity
    _startLine: number
    _endLine: number    
    _startColumn: number
    _endColumn: number

    constructor(name: string, element: SourcedEntity, startLine: number, endLine: number, startColumn : number, endColumn : number) {
        super(new FileAnchor(MSEDocument.getFamixRepository()), name, 'FileAnchor')
        this._sourcedEntity=element
        this._startLine=startLine
        this._endLine=endLine
        this._startColumn =startColumn
        this._endColumn=endColumn
    }

    execute(): void {
        this.famixElement.setFileName(this.name)
        this.famixElement.setElement(this._sourcedEntity)
        this.famixElement.setStartColumn(this._startColumn)
        this.famixElement.setEndColumn(this._endColumn)
        this.famixElement.setStartLine(this._startLine)
        this.famixElement.setEndLine(this._endLine)
    };

    search(name: string, type: string): FamixElement<any> {
        if(this.name.indexOf(name)!==-1 && this.type.indexOf(type)!==-1){
            return this
        }
        return null
    }

}
