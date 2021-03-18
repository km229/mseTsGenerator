import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./../famix/type";
import {ContainerEntity} from "./../famix/container_entity";
import {AnnotationInstance} from "./../famix/annotation_instance";

export declare class AnnotationType extends Type {
    private annotationTypeContainer;
    getContainer(): ContainerEntity;
    setContainer(newContainer: ContainerEntity): void;
    private annotationTypeInstances;
    getInstances(): Set<AnnotationInstance>;
    addInstances(annotationTypeInstances: AnnotationInstance): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
