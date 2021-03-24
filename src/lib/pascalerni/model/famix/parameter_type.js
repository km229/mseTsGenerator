"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const type_1 = require("./../famix/type");
class ParameterType extends type_1.Type {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ParameterType", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.ParameterType = ParameterType;
//# sourceMappingURL=parameter_type.js.map