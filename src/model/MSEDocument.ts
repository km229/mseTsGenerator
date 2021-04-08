import {FamixRepository} from "../../lib/pascalerni/famix_repository"
import {ProjectNode} from "../nodes/ProjectNode"
import {MetricService} from "./metricService"

export class MSEDocument {

    private static _fmx: FamixRepository
    private static _project: ProjectNode
    private static _metricService: MetricService

    constructor(projectPath: string) {
        MSEDocument._fmx = new FamixRepository()
        MSEDocument._project = new ProjectNode(projectPath)
        MSEDocument._metricService = MetricService.getMetricService()
        MSEDocument.getProject().findNodes()
        MSEDocument.getProject().execute()
    }

    static getFamixRepository(): FamixRepository {
        return MSEDocument._fmx
    }

    static getProject(): ProjectNode {
        return MSEDocument._project
    }

    static getMetricService(): MetricService {
        return MSEDocument._metricService
    }

    generateMseFile(path: string): void {
        if (MSEDocument.getProject() !== null) {
            const sF = MSEDocument._project.node.createSourceFile(path, MSEDocument.getFamixRepository().getMSE(), {overwrite: true})
            sF.saveSync()
        } else {
            console.log("Aucune instanciation du projet")
        }
    }
}