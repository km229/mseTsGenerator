"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./../famix/entity");
class Exception extends entity_1.Entity {
    // @FameProperty(name = "exceptionClass")
    getExceptionClass() {
        return this.exceptionExceptionClass;
    }
    setExceptionClass(exceptionExceptionClass) {
        this.exceptionExceptionClass = exceptionExceptionClass;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Exception", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("exceptionClass", this.getExceptionClass());
    }
}
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map