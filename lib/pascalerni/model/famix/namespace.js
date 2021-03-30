"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const scoping_entity_1 = require("./scoping_entity");
class Namespace extends scoping_entity_1.ScopingEntity {
    // @FameProperty(name = "numberOfAttributes")
    getNumberOfAttributes() {
        return this.namespaceNumberOfAttributes;
    }
    setNumberOfAttributes(namespaceNumberOfAttributes) {
        this.namespaceNumberOfAttributes = namespaceNumberOfAttributes;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Namespace", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("numberOfAttributes", this.getNumberOfAttributes());
    }
}
exports.Namespace = Namespace;
//# sourceMappingURL=namespace.js.map