import {FamixNode} from "./model/FamixNode";
import {Project} from "ts-morph";
import {FileNode} from "./nodes";
import {FolderNode} from "./nodes/FolderNode";

export class ProjectNode extends FamixNode<Project, null> {

    constructor(path: string) {
        super(new Project(), null, path);
        this._node.addSourceFilesAtPaths(this.name + "/**/*{.d.ts,.ts}")
    }

    execute() {
        this._node.getSourceFiles().forEach(file => {
            this.add(new FileNode(file))
            let folder = this.search(file.getDirectory().getPath(), 'Directory')
            if (null !== folder) {
                this.add(new FolderNode(file.getDirectory()))
            }
        })
        super.execute()
    }
}