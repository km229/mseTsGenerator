import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourcedEntity} from "./sourced_entity";

export declare class Comment extends SourcedEntity {
    private commentContainer;
    getContainer(): SourcedEntity;
    setContainer(newContainer: SourcedEntity): void;
    private commentContent;
    getContent(): string;
    setContent(commentContent: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
