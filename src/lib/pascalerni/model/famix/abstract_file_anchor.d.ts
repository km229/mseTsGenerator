import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceAnchor} from "./../famix/source_anchor";

export declare class AbstractFileAnchor extends SourceAnchor {
    private abstractFileAnchorFileName;
    getFileName(): string;
    setFileName(abstractFileAnchorFileName: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
