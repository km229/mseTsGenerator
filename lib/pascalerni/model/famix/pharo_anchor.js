"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const source_anchor_1 = require("./source_anchor");
class PharoAnchor extends source_anchor_1.SourceAnchor {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.PharoAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.PharoAnchor = PharoAnchor;
//# sourceMappingURL=pharo_anchor.js.map