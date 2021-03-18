import * as Famix from "./model/famix";
import * as File from "./model/file";
import {FamixBaseElement} from "./famix_base_element";
import {FamixMseExporter} from "./famix_mse_exporter";
import {FamixRepository} from "./famix_repository";

declare const _default: {
    FamixBaseElement: typeof FamixBaseElement;
    FamixMseExporter: typeof FamixMseExporter;
    FamixRepository: typeof FamixRepository;
    model: {
        Famix: typeof Famix;
        File: typeof File;
    };
};
export = _default;
