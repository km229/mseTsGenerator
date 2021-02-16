"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const exception_1 = require("./../famix/exception");
class CaughtException extends exception_1.Exception {
    // oneMany.Getter
    // @FameProperty(name = "definingMethod", opposite = "caughtExceptions")
    getDefiningMethod() {
        return this.caughtExceptionDefiningMethod;
    }
    // oneMany.Setter
    setDefiningMethod(newDefiningMethod) {
        this.caughtExceptionDefiningMethod = newDefiningMethod;
        newDefiningMethod.getCaughtExceptions().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.CaughtException", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("definingMethod", this.getDefiningMethod());
    }
}
exports.CaughtException = CaughtException;
//# sourceMappingURL=caught_exception.js.map