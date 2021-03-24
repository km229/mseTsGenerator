import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./../famix/source_language";
import {Entity} from "./../famix/entity";
import {Comment} from "./../famix/comment";
import {SourceAnchor} from "./../famix/source_anchor";

export declare class SourcedEntity extends Entity {
    private sourcedEntitySourceAnchor;
    getSourceAnchor(): SourceAnchor;
    setSourceAnchor(newSourceAnchor: SourceAnchor): void;
    private sourcedEntityComments;
    getComments(): Set<Comment>;
    addComments(sourcedEntityComments: Comment): void;
    private sourcedEntityDeclaredSourceLanguage;
    getDeclaredSourceLanguage(): SourceLanguage;
    setDeclaredSourceLanguage(newDeclaredSourceLanguage: SourceLanguage): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
