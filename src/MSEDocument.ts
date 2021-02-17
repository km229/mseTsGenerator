import { Project } from "ts-morph"
import * as c from '../constants'
import {FileNode} from './nodes'
import {Element} from "./model/Element"

export class MSEDocument {

    private _project: Project
    private _projectPath: string
    private _fileList: FileNode[]
    private _elementList: Element[]
    private _idCounter: number

    constructor(projectPath: string) {
        this._project=new Project()
        this._projectPath=projectPath
        this._project.addSourceFilesAtPaths(this._projectPath+"/**/*{.d.ts,.ts}")
        this._fileList = []
        this._elementList = []
        this._idCounter=1
    }

    public explore(): void {
        //TODO?
        // this._project.getDirectories().forEach (element =>{
        //     this._elementList.push(new Element(this.getNextId,"Folder",[
        //         ["name", `'${element.getPath()}'`],
        //     ], "FILE"))
        // })
        
        this._project.getSourceFiles().forEach(sourceFile => {
            //TODO?
            // this._elementList.push(new Element(this.getNextId,"File",[
            //     ["name", `'${sourceFile.getFilePath()}'`],
            // ], "FILE"))
            this._fileList.push(new FileNode(this, sourceFile))
        })
    }

    //TODO?
    // public findByName(name: string): any {
    // }
    // public findById(id: number): any {
    // }

    public generateFile(path: string): void {
        const sF = this._project.createSourceFile(path, this.toMSE(), {overwrite: true})
        sF.saveSync()
    }

    public toMSE(): string {
        let mse = c.OPEN_TOKEN+"\n"
        this._fileList.forEach(file => {
            mse += file.toMSE()
        })
        this._elementList.forEach(element => {
            mse += element.toMSE()
        })
        return mse += "\n"+c.CLOSE_TOKEN
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