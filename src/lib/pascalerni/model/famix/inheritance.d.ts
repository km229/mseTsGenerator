import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./../famix/type";
import {Association} from "./../famix/association";

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
