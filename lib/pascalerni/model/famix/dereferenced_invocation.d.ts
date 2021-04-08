import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";
import {Invocation} from "./invocation";

export declare class DereferencedInvocation extends Invocation {
    private dereferencedInvocationReferencer;

    getReferencer(): StructuralEntity;

    setReferencer(newReferencer: StructuralEntity): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
