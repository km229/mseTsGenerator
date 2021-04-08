"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const type_1 = require("./type");
class ParameterizedType extends type_1.Type {
    constructor() {
        super(...arguments);
        this.parameterizedTypeArguments = new Set();
    }
    // oneMany.Getter
    // @FameProperty(name = "parameterizableClass", opposite = "parameterizedTypes")
    getParameterizableClass() {
        return this.parameterizedTypeParameterizableClass;
    }
    // oneMany.Setter
    setParameterizableClass(newParameterizableClass) {
        this.parameterizedTypeParameterizableClass = newParameterizableClass;
        newParameterizableClass.getParameterizedTypes().add(this);
    }
    // manyMany.Getter
    // @FameProperty(name = "arguments", opposite = "argumentsInParameterizedTypes")
    getArguments() {
        return this.parameterizedTypeArguments;
    }
    // manyMany.Setter
    addArguments(newArguments) {
        if (!this.parameterizedTypeArguments.has(newArguments)) {
            this.parameterizedTypeArguments.add(newArguments);
            newArguments.getArgumentsInParameterizedTypes().add(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ParameterizedType", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parameterizableClass", this.getParameterizableClass());
        exporter.addProperty("arguments", this.getArguments());
    }
}
exports.ParameterizedType = ParameterizedType;
//# sourceMappingURL=parameterized_type.js.map