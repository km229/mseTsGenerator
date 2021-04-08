import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./type";
import {ParameterizableClass} from "./parameterizable_class";

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
