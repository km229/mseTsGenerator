import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./../famix/type";
import {Association} from "./../famix/association";
import {BehaviouralEntity} from "./../famix/behavioural_entity";

export declare class Reference extends Association {
    private referenceSource;
    getSource(): BehaviouralEntity;
    setSource(newSource: BehaviouralEntity): void;
    private referenceTarget;
    getTarget(): Type;
    setTarget(newTarget: Type): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}