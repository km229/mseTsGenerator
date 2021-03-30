"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./structural_entity");
class Attribute extends structural_entity_1.StructuralEntity {
    // @FameProperty(name = "hasClassScope")
    getHasClassScope() {
        return this.attributeHasClassScope;
    }
    setHasClassScope(attributeHasClassScope) {
        this.attributeHasClassScope = attributeHasClassScope;
    }
    // oneMany.Getter
    // @FameProperty(name = "parentType", opposite = "attributes")
    getParentType() {
        return this.attributeParentType;
    }
    // oneMany.Setter
    setParentType(newParentType) {
        this.attributeParentType = newParentType;
        newParentType.getAttributes().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Attribute", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("hasClassScope", this.getHasClassScope());
        exporter.addProperty("parentType", this.getParentType());
    }
}
exports.Attribute = Attribute;
//# sourceMappingURL=attribute.js.map