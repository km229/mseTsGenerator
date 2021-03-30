import {FamixMseExporter} from "../../famix_mse_exporter";
import {BehaviouralEntity} from "./behavioural_entity";
import {ContainerEntity} from "./container_entity";
import {Module} from "./module";

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
