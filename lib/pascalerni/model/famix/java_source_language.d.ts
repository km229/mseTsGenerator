import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./source_language";

export declare class JavaSourceLanguage extends SourceLanguage {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
