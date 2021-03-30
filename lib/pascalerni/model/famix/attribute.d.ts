import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./structural_entity";
import {Type} from "./type";

export declare class Attribute extends StructuralEntity {
    private attributeHasClassScope;

    getHasClassScope(): boolean;

    setHasClassScope(attributeHasClassScope: boolean): void;

    private attributeParentType;

    getParentType(): Type;

    setParentType(newParentType: Type): void;

    getMSE(): string;

    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
