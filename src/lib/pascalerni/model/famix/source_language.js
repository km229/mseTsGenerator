"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./../famix/entity");
class SourceLanguage extends entity_1.Entity {
    constructor() {
        super(...arguments);
        this.sourceLanguageSourcedEntities = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "sourcedEntities", opposite = "declaredSourceLanguage", derived = true)
    getSourcedEntities() {
        return this.sourceLanguageSourcedEntities;
    }
    // manyOne.Setter
    addSourcedEntities(sourceLanguageSourcedEntities) {
        if (!this.sourceLanguageSourcedEntities.has(sourceLanguageSourcedEntities)) {
            this.sourceLanguageSourcedEntities.add(sourceLanguageSourcedEntities);
            sourceLanguageSourcedEntities.setDeclaredSourceLanguage(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourceLanguage", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("sourcedEntities", this.getSourcedEntities());
    }
}
exports.SourceLanguage = SourceLanguage;
//# sourceMappingURL=source_language.js.map