"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./../famix/structural_entity");
class UnknownVariable extends structural_entity_1.StructuralEntity {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.UnknownVariable", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.UnknownVariable = UnknownVariable;
//# sourceMappingURL=unknown_variable.js.map