import {FamixMseExporter} from "../../famix_mse_exporter";
import {Association} from "./association";

export declare class Include extends Association {
    private includeSource;
    getSource(): Object;
    setSource(includeSource: Object): void;
    private includeTarget;
    getTarget(): Object;
    setTarget(includeTarget: Object): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
