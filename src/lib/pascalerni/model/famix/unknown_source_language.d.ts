import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./../famix/source_language";

export declare class UnknownSourceLanguage extends SourceLanguage {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
