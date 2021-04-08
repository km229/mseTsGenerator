"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const association_1 = require("./association");
class Include extends association_1.Association {
    // @FameProperty(name = "source")
    getSource() {
        return this.includeSource;
    }
    setSource(includeSource) {
        this.includeSource = includeSource;
    }
    // @FameProperty(name = "target")
    getTarget() {
        return this.includeTarget;
    }
    setTarget(includeTarget) {
        this.includeTarget = includeTarget;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Include", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("source", this.getSource());
        exporter.addProperty("target", this.getTarget());
    }
}
exports.Include = Include;
//# sourceMappingURL=include.js.map