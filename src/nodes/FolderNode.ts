import type from "../types"
import {Folder} from "../../lib/pascalerni/model/file"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {Directory} from "ts-morph"

export class FolderNode extends FamixNode<Directory, Folder> {

    constructor(d: Directory) {
        super(d, new Folder(MSEDocument.getFamixRepository()), d.getPath(), type.DIRECTORY);
    }

    execute(): void {

        this.famixElement.setName(this.node.getPath())

    }

}

