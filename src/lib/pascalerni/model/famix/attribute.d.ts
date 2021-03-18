import {FamixMseExporter} from "../../famix_mse_exporter";
import {StructuralEntity} from "./../famix/structural_entity";
import {Type} from "./../famix/type";

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
