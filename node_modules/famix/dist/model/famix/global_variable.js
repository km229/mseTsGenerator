"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./../famix/structural_entity");
class GlobalVariable extends structural_entity_1.StructuralEntity {
    // oneMany.Getter
    // @FameProperty(name = "parentScope", opposite = "globalVariables")
    getParentScope() {
        return this.globalVariableParentScope;
    }
    // oneMany.Setter
    setParentScope(newParentScope) {
        this.globalVariableParentScope = newParentScope;
        newParentScope.getGlobalVariables().add(this);
    }
    // @FameProperty(name = "parentModule")
    getParentModule() {
        return this.globalVariableParentModule;
    }
    setParentModule(globalVariableParentModule) {
        this.globalVariableParentModule = globalVariableParentModule;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.GlobalVariable", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parentScope", this.getParentScope());
        exporter.addProperty("parentModule", this.getParentModule());
    }
}
exports.GlobalVariable = GlobalVariable;
//# sourceMappingURL=global_variable.js.map