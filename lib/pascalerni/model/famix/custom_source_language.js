"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const source_language_1 = require("./source_language");
class CustomSourceLanguage extends source_language_1.SourceLanguage {
    // @FameProperty(name = "name")
    getName() {
        return this.customSourceLanguageName;
    }
    setName(customSourceLanguageName) {
        this.customSourceLanguageName = customSourceLanguageName;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.CustomSourceLanguage", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("name", this.getName());
    }
}
exports.CustomSourceLanguage = CustomSourceLanguage;
//# sourceMappingURL=custom_source_language.js.map