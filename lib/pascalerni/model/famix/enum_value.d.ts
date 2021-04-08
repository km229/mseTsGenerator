import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";
import {Enum} from "./enum";

export declare class EnumValue extends StructuralEntity {
    private enumValueParentEnum;

    getParentEnum(): Enum;

    setParentEnum(newParentEnum: Enum): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
