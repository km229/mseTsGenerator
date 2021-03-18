import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceAnchor} from "./../famix/source_anchor";

export declare class PharoAnchor extends SourceAnchor {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}