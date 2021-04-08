import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./type";
import {Association} from "./association";

export declare class Inheritance extends Association {
    private inheritanceSuperclass;

    getSuperclass(): Type;

    setSuperclass(newSuperclass: Type): void;

    private inheritanceSubclass;

    getSubclass(): Type;

    setSubclass(newSubclass: Type): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
