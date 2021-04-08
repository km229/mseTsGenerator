"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const association_1 = require("./association");
class Reference extends association_1.Association {
    // oneMany.Getter
    // @FameProperty(name = "source", opposite = "outgoingReferences")
    getSource() {
        return this.referenceSource;
    }
    // oneMany.Setter
    setSource(newSource) {
        this.referenceSource = newSource;
        newSource.getOutgoingReferences().add(this);
    }
    // oneMany.Getter
    // @FameProperty(name = "target", opposite = "incomingReferences")
    getTarget() {
        return this.referenceTarget;
    }
    // oneMany.Setter
    setTarget(newTarget) {
        this.referenceTarget = newTarget;
        newTarget.getIncomingReferences().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Reference", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("source", this.getSource());
        exporter.addProperty("target", this.getTarget());
    }
}
exports.Reference = Reference;
//# sourceMappingURL=reference.js.map