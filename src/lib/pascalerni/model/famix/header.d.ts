import {FamixMseExporter} from "../../famix_mse_exporter";
import {File} from "./../file/file";

export declare class Header extends File {
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
