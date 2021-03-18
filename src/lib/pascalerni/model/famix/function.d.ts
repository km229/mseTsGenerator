import {FamixMseExporter} from "../../famix_mse_exporter";
import {BehaviouralEntity} from "./../famix/behavioural_entity";
import {ContainerEntity} from "./../famix/container_entity";
import {Module} from "./../famix/module";

export declare class Function extends BehaviouralEntity {
    private functionContainer;
    getContainer(): ContainerEntity;
    setContainer(newContainer: ContainerEntity): void;
    private functionParentModule;
    getParentModule(): Module;
    setParentModule(functionParentModule: Module): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
