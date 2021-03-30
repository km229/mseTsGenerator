import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";
import {ScopingEntity} from "./scoping_entity";
import {Module} from "./module";

export declare class GlobalVariable extends StructuralEntity {
    private globalVariableParentScope;

    getParentScope(): ScopingEntity;

    setParentScope(newParentScope: ScopingEntity): void;

    private globalVariableParentModule;

    getParentModule(): Module;

    setParentModule(globalVariableParentModule: Module): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
