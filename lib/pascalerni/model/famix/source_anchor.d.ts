import {FamixMseExporter} from "../../famix_mse_exporter";
import {Entity} from "./entity";
import {SourcedEntity} from "./sourced_entity";

export declare class SourceAnchor extends Entity {
    private sourceAnchorElement;

    getElement(): SourcedEntity;

    setElement(newElement: SourcedEntity): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
