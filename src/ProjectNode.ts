import {FamixNode} from "./model/FamixNode";
import {Project} from "ts-morph";
import {FileNode} from "./nodes";
import {FolderNode} from "./nodes/FolderNode";
import {PrimitiveElement} from "./elements/PrimitiveElement";

export class ProjectNode extends FamixNode<Project, null> {

    constructor(path: string) {
        super(new Project(), null, path, 'Project');
        this.node.addSourceFilesAtPaths(path + "/**/*{.d.ts,.ts}")
    }

    execute() {
        this.node.getSourceFiles().forEach(file => {
            this.add(new FileNode(file))
            let folder = this.search(file.getDirectory().getPath(), 'Directory')
            if (null == folder) {
                this.add(new FolderNode(file.getDirectory()))
            }
        })
        this.add(new PrimitiveElement('number'))
        this.add(new PrimitiveElement('string'))
        this.add(new PrimitiveElement('boolean'))
        super.execute()
    }

}