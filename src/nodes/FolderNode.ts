import {Folder} from "../lib/pascalerni/model/file";
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {Directory} from "ts-morph";

export class FolderNode extends FamixNode<Directory, Folder> {

    constructor(d: Directory) {
        super(d, new Folder(MSEDocument.getFamixRepository()), d.getPath(), 'Directory');
    }

    execute(): void {

        this.famixElement.setName(this.node.getPath())

    }

}

