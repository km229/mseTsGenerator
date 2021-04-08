import {FamixMseExporter} from "../../famix_mse_exporter";
import {Attribute} from "./attribute";
import {AnnotationInstanceAttribute} from "./annotation_instance_attribute";

export declare class AnnotationTypeAttribute extends Attribute {
    private annotationTypeAttributeAnnotationAttributeInstances;

    getAnnotationAttributeInstances(): Set<AnnotationInstanceAttribute>;

    addAnnotationAttributeInstances(annotationTypeAttributeAnnotationAttributeInstances: AnnotationInstanceAttribute): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
