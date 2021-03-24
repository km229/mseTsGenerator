import {FamixMseExporter} from "../../famix_mse_exporter";
import {Method} from "./../famix/method";
import {Exception} from "./../famix/exception";

export declare class DeclaredException extends Exception {
    private declaredExceptionDefiningMethod;
    getDefiningMethod(): Method;
    setDefiningMethod(newDefiningMethod: Method): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
