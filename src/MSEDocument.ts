import { Project } from "ts-morph"
import * as c from '../constants'
import {FileNode} from './nodes'

export class MSEDocument {
    private _project: Project
    private _fileList: FileNode[]
    private _idCounter: number

    constructor(projectPath: string) {
        this._project=new Project()
        this._project.addSourceFilesAtPaths(projectPath+"/**/*{.d.ts,.ts}")
        this._fileList = []
        this._idCounter=1
    }

    public explore(): void {
        let file
        this._project.getSourceFiles().forEach(sourceFile => {
            file = new FileNode(sourceFile, this)
            this._fileList.push(file)
            file.explore()
        })
    }

    /* TODO - A revoir
    public findById(id: number): Node {
    }
    */

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
