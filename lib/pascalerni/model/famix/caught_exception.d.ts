import {FamixMseExporter} from "../../famix_mse_exporter";
import {Method} from "./method";
import {Exception} from "./exception";

export declare class CaughtException extends Exception {
    private caughtExceptionDefiningMethod;

    getDefiningMethod(): Method;

    setDefiningMethod(newDefiningMethod: Method): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
