import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./../famix/type";
import {ParameterizableClass} from "./../famix/parameterizable_class";

export declare class ParameterizedType extends Type {
    private parameterizedTypeParameterizableClass;
    getParameterizableClass(): ParameterizableClass;
    setParameterizableClass(newParameterizableClass: ParameterizableClass): void;
    private parameterizedTypeArguments;
    getArguments(): Set<Type>;
    addArguments(newArguments: Type): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}