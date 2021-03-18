import {FamixMseExporter} from "../../famix_mse_exporter";
import {Function} from "./../famix/function";
import {NamedEntity} from "./../famix/named_entity";
import {Type} from "./../famix/type";
import {AnnotationType} from "./../famix/annotation_type";

export declare class ContainerEntity extends NamedEntity {
    private containerEntityTypes;
    getTypes(): Set<Type>;
    addTypes(containerEntityTypes: Type): void;
    private containerEntityFunctions;
    getFunctions(): Set<Function>;
    addFunctions(containerEntityFunctions: Function): void;
    private containerEntityDefinedAnnotationTypes;
    getDefinedAnnotationTypes(): Set<AnnotationType>;
    addDefinedAnnotationTypes(containerEntityDefinedAnnotationTypes: AnnotationType): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}