import {FamixMseExporter} from "../../famix_mse_exporter";
import {ParameterizedType} from "./parameterized_type";
import {Class} from "./class";

export declare class ParameterizableClass extends Class {
    private parameterizableClassParameterizedTypes;

    getParameterizedTypes(): Set<ParameterizedType>;

    addParameterizedTypes(parameterizableClassParameterizedTypes: ParameterizedType): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
