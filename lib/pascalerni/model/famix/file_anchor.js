"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const abstract_file_anchor_1 = require("./abstract_file_anchor");
class FileAnchor extends abstract_file_anchor_1.AbstractFileAnchor {
    // @FameProperty(name = "endLine")
    getEndLine() {
        return this.fileAnchorEndLine;
    }
    setEndLine(fileAnchorEndLine) {
        this.fileAnchorEndLine = fileAnchorEndLine;
    }
    // @FameProperty(name = "endColumn")
    getEndColumn() {
        return this.fileAnchorEndColumn;
    }
    setEndColumn(fileAnchorEndColumn) {
        this.fileAnchorEndColumn = fileAnchorEndColumn;
    }
    // @FameProperty(name = "startColumn")
    getStartColumn() {
        return this.fileAnchorStartColumn;
    }
    setStartColumn(fileAnchorStartColumn) {
        this.fileAnchorStartColumn = fileAnchorStartColumn;
    }
    // @FameProperty(name = "startLine")
    getStartLine() {
        return this.fileAnchorStartLine;
    }
    setStartLine(fileAnchorStartLine) {
        this.fileAnchorStartLine = fileAnchorStartLine;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.FileAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("endLine", this.getEndLine());
        exporter.addProperty("endColumn", this.getEndColumn());
        exporter.addProperty("startColumn", this.getStartColumn());
        exporter.addProperty("startLine", this.getStartLine());
    }
}
exports.FileAnchor = FileAnchor;
//# sourceMappingURL=file_anchor.js.map