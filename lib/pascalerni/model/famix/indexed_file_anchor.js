"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const abstract_file_anchor_1 = require("./abstract_file_anchor");
class IndexedFileAnchor extends abstract_file_anchor_1.AbstractFileAnchor {
    // @FameProperty(name = "startPos")
    getStartPos() {
        return this.indexedFileAnchorStartPos;
    }
    setStartPos(indexedFileAnchorStartPos) {
        this.indexedFileAnchorStartPos = indexedFileAnchorStartPos;
    }
    // @FameProperty(name = "endPos")
    getEndPos() {
        return this.indexedFileAnchorEndPos;
    }
    setEndPos(indexedFileAnchorEndPos) {
        this.indexedFileAnchorEndPos = indexedFileAnchorEndPos;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.IndexedFileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("startPos", this.getStartPos());
        exporter.addProperty("endPos", this.getEndPos());
    }
}
exports.IndexedFileAnchor = IndexedFileAnchor;
//# sourceMappingURL=indexed_file_anchor.js.map