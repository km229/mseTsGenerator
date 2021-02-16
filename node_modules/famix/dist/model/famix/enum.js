"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const type_1 = require("./../famix/type");
class Enum extends type_1.Type {
    constructor() {
        super(...arguments);
        this.enumValues = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "values", opposite = "parentEnum", derived = true)
    getValues() {
        return this.enumValues;
    }
    // manyOne.Setter
    addValues(enumValues) {
        if (!this.enumValues.has(enumValues)) {
            this.enumValues.add(enumValues);
            enumValues.setParentEnum(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Enum", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("values", this.getValues());
    }
}
exports.Enum = Enum;
//# sourceMappingURL=enum.js.map