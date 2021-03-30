import {Project} from "ts-morph"
import * as type from "../types"
import {FamixNode} from "../model/FamixNode"
import {FileNode, FolderNode} from "../nodes"
import {PrimitiveElement} from "../elements"

export class ProjectNode extends FamixNode<Project, null> {

    constructor(path: string) {
        // Ajout du projet ts-morph
        super(new Project(), null, path, type.PROJECT)
        //ProjectNode.components.push(this)
        this.node.addSourceFilesAtPaths(path + "/**/*{.d.ts,.ts}")
    }

    findNodes() {
        // Recherche des fichiers et des dossiers
        this.node.getSourceFiles().forEach(file => {
            this.addNode(new FileNode(file))
            let folder = this.search(file.getDirectory().getPath(), 'Directory')
            if (null == folder) {
                this.addNode(new FolderNode(file.getDirectory()))
            }
        })

        // Ajout des types primitifs
        this.addNode(new PrimitiveElement('object'))
        this.addNode(new PrimitiveElement('number'))
        this.addNode(new PrimitiveElement('string'))
        this.addNode(new PrimitiveElement('boolean'))

        // Recherche au sein des noeuds enfants
        super.findNodes()
    }

    execute() {
        super.execute()
    }

}