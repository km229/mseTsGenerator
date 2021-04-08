import {FamixMseExporter} from "../../famix_mse_exporter";
import {DereferencedInvocation} from "./dereferenced_invocation";
import {Type} from "./type";
import {Access} from "./access";
import {LeafEntity} from "./leaf_entity";

export declare class StructuralEntity extends LeafEntity {
    private structuralEntityIncomingAccesses;

    getIncomingAccesses(): Set<Access>;

    addIncomingAccesses(structuralEntityIncomingAccesses: Access): void;

    private structuralEntityDeclaredType;

    getDeclaredType(): Type;

    setDeclaredType(newDeclaredType: Type): void;

    private structuralEntityDereferencedInvocations;

    getDereferencedInvocations(): Set<DereferencedInvocation>;
    addDereferencedInvocations(structuralEntityDereferencedInvocations: DereferencedInvocation): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
