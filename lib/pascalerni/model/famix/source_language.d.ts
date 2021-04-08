import {FamixMseExporter} from "../../famix_mse_exporter";
import {Entity} from "./entity";
import {SourcedEntity} from "./sourced_entity";

export declare class SourceLanguage extends Entity {
    private sourceLanguageSourcedEntities;

    getSourcedEntities(): Set<SourcedEntity>;

    addSourcedEntities(sourceLanguageSourcedEntities: SourcedEntity): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
