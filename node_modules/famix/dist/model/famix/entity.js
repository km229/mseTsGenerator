"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const famix_base_element_1 = require("./../../famix_base_element");
class Entity extends famix_base_element_1.FamixBaseElement {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Entity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map