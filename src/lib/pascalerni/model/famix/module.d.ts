import {FamixMseExporter} from "../../famix_mse_exporter";
import {CompilationUnit} from "./../famix/compilation_unit";
import {ScopingEntity} from "./../famix/scoping_entity";

export declare class Module extends ScopingEntity {
    private moduleCompilationUnit;
    getCompilationUnit(): CompilationUnit;
    setCompilationUnit(newCompilationUnit: CompilationUnit): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
