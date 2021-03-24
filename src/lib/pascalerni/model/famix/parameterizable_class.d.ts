import {FamixMseExporter} from "../../famix_mse_exporter";
import {ParameterizedType} from "./../famix/parameterized_type";
import {Class} from "./../famix/class";

export declare class ParameterizableClass extends Class {
    private parameterizableClassParameterizedTypes;
    getParameterizedTypes(): Set<ParameterizedType>;
    addParameterizedTypes(parameterizableClassParameterizedTypes: ParameterizedType): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
