"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const source_anchor_1 = require("./../famix/source_anchor");
class SourceTextAnchor extends source_anchor_1.SourceAnchor {
    // @FameProperty(name = "source")
    getSource() {
        return this.sourceTextAnchorSource;
    }
    setSource(sourceTextAnchorSource) {
        this.sourceTextAnchorSource = sourceTextAnchorSource;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourceTextAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("source", this.getSource());
    }
}
exports.SourceTextAnchor = SourceTextAnchor;
//# sourceMappingURL=source_text_anchor.js.map