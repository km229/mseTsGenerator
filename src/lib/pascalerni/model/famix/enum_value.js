"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./../famix/structural_entity");
class EnumValue extends structural_entity_1.StructuralEntity {
    // oneMany.Getter
    // @FameProperty(name = "parentEnum", opposite = "values")
    getParentEnum() {
        return this.enumValueParentEnum;
    }
    // oneMany.Setter
    setParentEnum(newParentEnum) {
        this.enumValueParentEnum = newParentEnum;
        newParentEnum.getValues().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.EnumValue", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parentEnum", this.getParentEnum());
    }
}
exports.EnumValue = EnumValue;
//# sourceMappingURL=enum_value.js.map