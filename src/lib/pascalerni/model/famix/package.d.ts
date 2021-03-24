import {FamixMseExporter} from "../../famix_mse_exporter";
import {NamedEntity} from "./../famix/named_entity";
import {ScopingEntity} from "./../famix/scoping_entity";

export declare class Package extends ScopingEntity {
    private packageNumberOfClientPackages;
    getNumberOfClientPackages(): number;
    setNumberOfClientPackages(packageNumberOfClientPackages: number): void;
    private packageChildNamedEntities;
    getChildNamedEntities(): Set<NamedEntity>;
    addChildNamedEntities(packageChildNamedEntities: NamedEntity): void;
    private packageNumberOfMethods;
    getNumberOfMethods(): number;
    setNumberOfMethods(packageNumberOfMethods: number): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
