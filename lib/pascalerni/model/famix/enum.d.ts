import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./type";
import {EnumValue} from "./enum_value";

export declare class Enum extends Type {
    private enumValues;

    getValues(): Set<EnumValue>;

    addValues(enumValues: EnumValue): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
