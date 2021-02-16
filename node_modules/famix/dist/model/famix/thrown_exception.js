"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const exception_1 = require("./../famix/exception");
class ThrownException extends exception_1.Exception {
    // oneMany.Getter
    // @FameProperty(name = "definingMethod", opposite = "thrownExceptions")
    getDefiningMethod() {
        return this.thrownExceptionDefiningMethod;
    }
    // oneMany.Setter
    setDefiningMethod(newDefiningMethod) {
        this.thrownExceptionDefiningMethod = newDefiningMethod;
        newDefiningMethod.getThrownExceptions().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ThrownException", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("definingMethod", this.getDefiningMethod());
    }
}
exports.ThrownException = ThrownException;
//# sourceMappingURL=thrown_exception.js.map