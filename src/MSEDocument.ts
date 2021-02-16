import { Project } from "ts-morph"
import * as c from '../constants'
import {FileNode} from './nodes'
import {Element} from "./model/Element"

export class MSEDocument {

    private _project: Project
    private _projectPath: string
    private _fileList: FileNode[]
    private _idCounter: number

    constructor(projectPath: string) {
        this._project=new Project()
        this._projectPath=projectPath
        this._project.addSourceFilesAtPaths(this._projectPath+"/**/*{.d.ts,.ts}")
        this._fileList = []
        this._idCounter=1
    }

    public explore(): void {
        this._project.getDirectories().forEach (element =>{
            let newElement = new Element(this.getNextId,"Directory",[
                ["name", `'${element.getBaseName()}'`],
                ["path", `'${element.getPath()}'`],
            ])
            newElement.toMSE();
        })
        
        this._project.getSourceFiles().forEach(sourceFile => {
            let newFIle = new Element(this.getNextId,"SourceFile",[
                ["fileName", `'${sourceFile.getFilePath()}'`],
                ["startLine", String(sourceFile.getStartLineNumber())],
                ["endLine", String(sourceFile.getEndLineNumber())],
            ])
            newFIle.toMSE();
            this._fileList.push(new FileNode(this, sourceFile))
        })
    }

    //TODO?
    /*public findByName(name: string): any {
    }
    public findById(id: number): any {
    }*/

    public generateFile(path: string): void {
        const sF = this._project.createSourceFile(path, this.toMSE(), {overwrite: true})
        sF.saveSync()
    }

    public toMSE(): string {
        let result = c.OPEN_TOKEN+"\n"
        this._fileList.forEach(file => {
            result += file.toMSE()
        })
        result += "\n"+c.CLOSE_TOKEN
        return result;
    }

    public showTree(): void {
        this._fileList.forEach(file => {
            console.log(file.showTree());
        })
    }

    get getNextId(): number {
        let id = this._idCounter
        this._idCounter++
        return id
    }

    get project(): Project {
        return this._project
    }

    get fileList(): FileNode[] {
        return this._fileList
    }

}