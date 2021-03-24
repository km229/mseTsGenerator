import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./../famix/source_language";

export declare class CSourceLanguage extends SourceLanguage {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
