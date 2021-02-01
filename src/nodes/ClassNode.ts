
import {ClassDeclaration, MSEDocument, Node} from './Node'

export class ClassNode implements Node {

    constructor(node: ClassDeclaration, _context: MSEDocument) {

    }


    _node: ClassDeclaration

    toMSE(): string {
        return "";
    }

}