import {FamixMseExporter} from "../../famix_mse_exporter";
import {Method} from "./method";
import {Exception} from "./exception";

export declare class DeclaredException extends Exception {
    private declaredExceptionDefiningMethod;

    getDefiningMethod(): Method;

    setDefiningMethod(newDefiningMethod: Method): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
