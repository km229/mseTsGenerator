import { Project } from "ts-morph"
import * as c from '../constants'
import {File} from './File'

export class MSEDocument {
    private readonly _const: any;
    private _project: Project;
    private _projectPath: string;
    private _id: number;

    constructor(projectPath: string, documentType: c.MSE_FORMAT = c.MSE_FORMAT.MSE) {
        this._id=1;
        this._project=new Project();
        this._project.addSourceFilesAtPaths(projectPath+"/**/*{.d.ts,.ts}");
        documentType === c.MSE_FORMAT.MSE ? this._const=c.mse_const : this._const=c.json_const;
    }

    private explore(): void {
        let res
        this._project.getSourceFiles().forEach(sourceFile => {
            let s = new File(sourceFile, this);
            res += s.toMSE();
        })
        return res;
    }

    public generateFile(path: string): void {
        const sF = this._project.createSourceFile(path, this.toMSE(), {overwrite: true})
        sF.saveSync()
    }

    public toMSE(): string {
        let result = this._const.open_token+"\n"
        result += this.explore();
        result += this._const.close_token;
        return result;
    }

    get const(): any {
        return this._const;
    }

    public getNextId(){
        let id = this._id
        this._id++;
        return id;
    }

    get projectPath(): string {
        return this._projectPath;
    }
}
