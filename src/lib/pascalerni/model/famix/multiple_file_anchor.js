"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const source_anchor_1 = require("./../famix/source_anchor");
class MultipleFileAnchor extends source_anchor_1.SourceAnchor {
    constructor() {
        super(...arguments);
        this.multipleFileAnchorAllFiles = new Set();
    }
    // @FameProperty(name = "allFiles")
    // many.getter
    getAllFiles() {
        return this.multipleFileAnchorAllFiles;
    }
    // many.Setter
    addAllFiles(newAllFiles) {
        if (!this.multipleFileAnchorAllFiles.has(newAllFiles)) {
            this.multipleFileAnchorAllFiles.add(newAllFiles);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.MultipleFileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("allFiles", this.getAllFiles());
    }
}
exports.MultipleFileAnchor = MultipleFileAnchor;
//# sourceMappingURL=multiple_file_anchor.js.map