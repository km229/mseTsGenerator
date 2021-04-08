"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const invocation_1 = require("./invocation");
class DereferencedInvocation extends invocation_1.Invocation {
    // oneMany.Getter
    // @FameProperty(name = "referencer", opposite = "dereferencedInvocations")
    getReferencer() {
        return this.dereferencedInvocationReferencer;
    }
    // oneMany.Setter
    setReferencer(newReferencer) {
        this.dereferencedInvocationReferencer = newReferencer;
        newReferencer.getDereferencedInvocations().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.DereferencedInvocation", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("referencer", this.getReferencer());
    }
}
exports.DereferencedInvocation = DereferencedInvocation;
//# sourceMappingURL=dereferenced_invocation.js.map