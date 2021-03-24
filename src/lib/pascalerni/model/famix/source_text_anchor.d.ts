import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceAnchor} from "./../famix/source_anchor";

export declare class SourceTextAnchor extends SourceAnchor {
    private sourceTextAnchorSource;
    getSource(): string;
    setSource(sourceTextAnchorSource: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
