import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourcedEntity} from "./sourced_entity";

export declare class Association extends SourcedEntity {
    private associationNext;
    getNext(): Association;
    setNext(newNext: Association): void;
    private associationPrevious;
    getPrevious(): Association;
    setPrevious(newPrevious: Association): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
