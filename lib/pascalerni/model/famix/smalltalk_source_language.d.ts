import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./source_language";

export declare class SmalltalkSourceLanguage extends SourceLanguage {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
