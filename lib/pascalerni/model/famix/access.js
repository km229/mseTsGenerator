"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const association_1 = require("./association");
class Access extends association_1.Association {
    // oneMany.Getter
    // @FameProperty(name = "accessor", opposite = "accesses")
    getAccessor() {
        return this.accessAccessor;
    }
    // oneMany.Setter
    setAccessor(newAccessor) {
        this.accessAccessor = newAccessor;
        newAccessor.getAccesses().add(this);
    }
    // oneMany.Getter
    // @FameProperty(name = "variable", opposite = "incomingAccesses")
    getVariable() {
        return this.accessVariable;
    }
    // oneMany.Setter
    setVariable(newVariable) {
        this.accessVariable = newVariable;
        newVariable.getIncomingAccesses().add(this);
    }
    // @FameProperty(name = "isWrite")
    getIsWrite() {
        return this.accessIsWrite;
    }
    setIsWrite(accessIsWrite) {
        this.accessIsWrite = accessIsWrite;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Access", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("accessor", this.getAccessor());
        exporter.addProperty("variable", this.getVariable());
        exporter.addProperty("isWrite", this.getIsWrite());
    }
}
exports.Access = Access;
//# sourceMappingURL=access.js.map