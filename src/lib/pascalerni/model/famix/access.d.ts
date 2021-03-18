import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./../famix/structural_entity";
import {Association} from "./../famix/association";
import {BehaviouralEntity} from "./../famix/behavioural_entity";

export declare class Access extends Association {
    private accessAccessor;
    getAccessor(): BehaviouralEntity;
    setAccessor(newAccessor: BehaviouralEntity): void;
    private accessVariable;
    getVariable(): StructuralEntity;
    setVariable(newVariable: StructuralEntity): void;
    private accessIsWrite;
    getIsWrite(): boolean;
    setIsWrite(accessIsWrite: boolean): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
