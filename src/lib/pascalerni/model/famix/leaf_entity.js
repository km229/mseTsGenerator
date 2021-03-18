"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const named_entity_1 = require("./../famix/named_entity");
class LeafEntity extends named_entity_1.NamedEntity {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.LeafEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.LeafEntity = LeafEntity;
//# sourceMappingURL=leaf_entity.js.map