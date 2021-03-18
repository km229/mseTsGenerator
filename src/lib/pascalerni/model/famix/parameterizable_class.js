"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const class_1 = require("./../famix/class");
class ParameterizableClass extends class_1.Class {
    constructor() {
        super(...arguments);
        this.parameterizableClassParameterizedTypes = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "parameterizedTypes", opposite = "parameterizableClass", derived = true)
    getParameterizedTypes() {
        return this.parameterizableClassParameterizedTypes;
    }
    // manyOne.Setter
    addParameterizedTypes(parameterizableClassParameterizedTypes) {
        if (!this.parameterizableClassParameterizedTypes.has(parameterizableClassParameterizedTypes)) {
            this.parameterizableClassParameterizedTypes.add(parameterizableClassParameterizedTypes);
            parameterizableClassParameterizedTypes.setParameterizableClass(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ParameterizableClass", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parameterizedTypes", this.getParameterizedTypes());
    }
}
exports.ParameterizableClass = ParameterizableClass;
//# sourceMappingURL=parameterizable_class.js.map