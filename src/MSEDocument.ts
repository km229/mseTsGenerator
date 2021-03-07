import {FamixRepository} from "famix/dist/famix_repository"
import {ProjectNode} from "./ProjectNode"

export class MSEDocument {

    private static _fmx: FamixRepository
    private static _project: ProjectNode

    constructor(projectPath: string) {
        MSEDocument._fmx = new FamixRepository()
        MSEDocument._project = new ProjectNode(projectPath)
        MSEDocument._project.execute()
    }

    static getFamixRepository(): FamixRepository {
        if (!MSEDocument._fmx) {
            MSEDocument._fmx = new FamixRepository()
        }
        return MSEDocument._fmx
    }

    public generateMseFile(path: string): void {
        const sF = MSEDocument._project._node.createSourceFile(path, MSEDocument.getFamixRepository().getMSE(), {overwrite: true})
        sF.saveSync()
    }

}