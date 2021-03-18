import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./../famix/type";

export declare class ParameterType extends Type {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
