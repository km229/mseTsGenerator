"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./entity");
class SourcedEntity extends entity_1.Entity {
    constructor() {
        super(...arguments);
        this.sourcedEntityComments = new Set();
    }
    // @FameProperty(name = "sourceAnchor", opposite = "element")
    getSourceAnchor() {
        return this.sourcedEntitySourceAnchor;
    }
    setSourceAnchor(newSourceAnchor) {
        if (this.sourcedEntitySourceAnchor === undefined) {
            this.sourcedEntitySourceAnchor = newSourceAnchor;
            newSourceAnchor.setElement(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "comments", opposite = "container", derived = true)
    getComments() {
        return this.sourcedEntityComments;
    }
    // manyOne.Setter
    addComments(sourcedEntityComments) {
        if (!this.sourcedEntityComments.has(sourcedEntityComments)) {
            this.sourcedEntityComments.add(sourcedEntityComments);
            sourcedEntityComments.setContainer(this);
        }
    }
    // oneMany.Getter
    // @FameProperty(name = "declaredSourceLanguage", opposite = "sourcedEntities")
    getDeclaredSourceLanguage() {
        return this.sourcedEntityDeclaredSourceLanguage;
    }
    // oneMany.Setter
    setDeclaredSourceLanguage(newDeclaredSourceLanguage) {
        this.sourcedEntityDeclaredSourceLanguage = newDeclaredSourceLanguage;
        newDeclaredSourceLanguage.getSourcedEntities().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourcedEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("sourceAnchor", this.getSourceAnchor());
        exporter.addProperty("comments", this.getComments());
        exporter.addProperty("declaredSourceLanguage", this.getDeclaredSourceLanguage());
    }
}
exports.SourcedEntity = SourcedEntity;
//# sourceMappingURL=sourced_entity.js.map