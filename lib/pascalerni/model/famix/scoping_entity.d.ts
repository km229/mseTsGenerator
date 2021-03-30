import {FamixMseExporter} from "../../famix_mse_exporter";
import {GlobalVariable} from "./global_variable";
import {ContainerEntity} from "./container_entity";

export declare class ScopingEntity extends ContainerEntity {
    private scopingEntityGlobalVariables;

    getGlobalVariables(): Set<GlobalVariable>;

    addGlobalVariables(scopingEntityGlobalVariables: GlobalVariable): void;

    private scopingEntityParentScope;

    getParentScope(): ScopingEntity;

    setParentScope(newParentScope: ScopingEntity): void;

    private scopingEntityChildScopes;

    getChildScopes(): Set<ScopingEntity>;
    addChildScopes(scopingEntityChildScopes: ScopingEntity): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
