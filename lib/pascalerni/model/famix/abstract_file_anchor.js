"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const source_anchor_1 = require("./source_anchor");
class AbstractFileAnchor extends source_anchor_1.SourceAnchor {
    // @FameProperty(name = "fileName")
    getFileName() {
        return this.abstractFileAnchorFileName;
    }
    setFileName(abstractFileAnchorFileName) {
        this.abstractFileAnchorFileName = abstractFileAnchorFileName;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AbstractFileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("fileName", this.getFileName());
    }
}
exports.AbstractFileAnchor = AbstractFileAnchor;
//# sourceMappingURL=abstract_file_anchor.js.map