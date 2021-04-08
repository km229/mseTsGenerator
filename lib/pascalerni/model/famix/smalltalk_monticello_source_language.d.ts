import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./source_language";

export declare class SmalltalkMonticelloSourceLanguage extends SourceLanguage {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
