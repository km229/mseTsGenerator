import {FamixMseExporter} from "../../famix_mse_exporter";
import {SourceLanguage} from "./source_language";
import {Entity} from "./entity";
import {Comment} from "./comment";
import {SourceAnchor} from "./source_anchor";

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
