import {FamixMseExporter} from "../../famix_mse_exporter";
import {Invocation} from "./../famix/invocation";
import {SourcedEntity} from "./../famix/sourced_entity";
import {Package} from "./../famix/package";
import {AnnotationInstance} from "./../famix/annotation_instance";

export declare class NamedEntity extends SourcedEntity {
    private namedEntityReceivingInvocations;
    getReceivingInvocations(): Set<Invocation>;
    addReceivingInvocations(namedEntityReceivingInvocations: Invocation): void;
    private namedEntityModifiers;
    getModifiers(): Set<string>;
    addModifiers(newModifiers: string): void;
    private namedEntityIsStub;
    getIsStub(): boolean;
    setIsStub(namedEntityIsStub: boolean): void;
    private namedEntityName;
    getName(): string;
    setName(namedEntityName: string): void;
    private namedEntityAnnotationInstances;
    getAnnotationInstances(): Set<AnnotationInstance>;
    addAnnotationInstances(namedEntityAnnotationInstances: AnnotationInstance): void;
    private namedEntityParentPackage;
    getParentPackage(): Package;
    setParentPackage(newParentPackage: Package): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
