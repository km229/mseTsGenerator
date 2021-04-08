import {FamixMseExporter} from "../../famix_mse_exporter";
import {Entity} from "../famix/entity";

export declare class AbstractFile extends Entity {
    private abstractFileName;
    getName(): string;
    setName(abstractFileName: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
