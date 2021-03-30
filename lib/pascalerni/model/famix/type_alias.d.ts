import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./type";

export declare class TypeAlias extends Type {
    private typeAliasAliasedType;
    getAliasedType(): Type;
    setAliasedType(newAliasedType: Type): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
