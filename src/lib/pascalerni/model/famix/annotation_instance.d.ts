import {FamixMseExporter} from "../../famix_mse_exporter";
import {Entity} from "./../famix/entity";
import {NamedEntity} from "./../famix/named_entity";
import {AnnotationType} from "./../famix/annotation_type";
import {AnnotationInstanceAttribute} from "./../famix/annotation_instance_attribute";

export declare class AnnotationInstance extends Entity {
    private annotationInstanceAnnotatedEntity;
    getAnnotatedEntity(): NamedEntity;
    setAnnotatedEntity(newAnnotatedEntity: NamedEntity): void;
    private annotationInstanceAnnotationType;
    getAnnotationType(): AnnotationType;
    setAnnotationType(newAnnotationType: AnnotationType): void;
    private annotationInstanceAttributes;
    getAttributes(): Set<AnnotationInstanceAttribute>;
    addAttributes(annotationInstanceAttributes: AnnotationInstanceAttribute): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
