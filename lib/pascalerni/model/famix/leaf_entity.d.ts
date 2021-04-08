import {FamixMseExporter} from "../../famix_mse_exporter";
import {NamedEntity} from "./named_entity";

export declare class LeafEntity extends NamedEntity {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
