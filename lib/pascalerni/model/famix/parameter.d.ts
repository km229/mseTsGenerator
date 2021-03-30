import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";
import {BehaviouralEntity} from "./behavioural_entity";

export declare class Parameter extends StructuralEntity {
    private parameterParentBehaviouralEntity;

    getParentBehaviouralEntity(): BehaviouralEntity;

    setParentBehaviouralEntity(newParentBehaviouralEntity: BehaviouralEntity): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
