import {FamixMseExporter} from "../../famix_mse_exporter";
import {Entity} from "./entity";
import {Class} from "./class";

export declare class Exception extends Entity {
    private exceptionExceptionClass;

    getExceptionClass(): Class;

    setExceptionClass(exceptionExceptionClass: Class): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
