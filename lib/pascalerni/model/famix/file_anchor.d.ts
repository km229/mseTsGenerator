import {FamixMseExporter} from "../../famix_mse_exporter";
import {AbstractFileAnchor} from "./abstract_file_anchor";

export declare class FileAnchor extends AbstractFileAnchor {
    private fileAnchorEndLine;
    getEndLine(): number;
    setEndLine(fileAnchorEndLine: number): void;
    private fileAnchorEndColumn;
    getEndColumn(): number;
    setEndColumn(fileAnchorEndColumn: number): void;
    private fileAnchorStartColumn;
    getStartColumn(): number;
    setStartColumn(fileAnchorStartColumn: number): void;
    private fileAnchorStartLine;
    getStartLine(): number;
    setStartLine(fileAnchorStartLine: number): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
