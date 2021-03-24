import {FamixMseExporter} from "../../famix_mse_exporter";
import {FileAnchor} from "./../famix/file_anchor";
import {SourceAnchor} from "./../famix/source_anchor";

export declare class MultipleFileAnchor extends SourceAnchor {
    private multipleFileAnchorAllFiles;
    getAllFiles(): Set<FileAnchor>;
    addAllFiles(newAllFiles: FileAnchor): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
