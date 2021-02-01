import {ClassDeclaration, SourceFile, SyntaxKind} from "ts-morph"
import {MSEDocument} from "./MSEDocument"
import * as node from "./nodes"

export class File {

    _context: MSEDocument
    _sf: SourceFile

    constructor(sF: SourceFile, mse: MSEDocument) {
        this._sf=sF
        this._context=mse
    }

    private explore(): void {
        this._sf.forEachChild(child => {
            switch (child.getKind()){
                case SyntaxKind.ClassDeclaration:
                    new node.ClassNode(child as ClassDeclaration, this._context)
                    break;
                case SyntaxKind.InterfaceDeclaration:
                    break;
                case SyntaxKind.ImportDeclaration:
                    break;
                case SyntaxKind.VariableStatement:
                    break;
                case SyntaxKind.ModuleDeclaration:
                    break;
            }
        })
    }

    public toMSE(): string {
        let result = this._context.const.open_token+"\n"
        result += this.explore()
        result += this._context.const.close_token;
        return result;
    }

}