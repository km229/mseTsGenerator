"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const source_language_1 = require("./../famix/source_language");
class CSourceLanguage extends source_language_1.SourceLanguage {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.CSourceLanguage", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.CSourceLanguage = CSourceLanguage;
//# sourceMappingURL=c_source_language.js.map