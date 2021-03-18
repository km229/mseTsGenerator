import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./../famix/source_language";

export declare class CustomSourceLanguage extends SourceLanguage {
    private customSourceLanguageName;
    getName(): string;
    setName(customSourceLanguageName: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
