"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./../famix/structural_entity");
class LocalVariable extends structural_entity_1.StructuralEntity {
    // oneMany.Getter
    // @FameProperty(name = "parentBehaviouralEntity", opposite = "localVariables")
    getParentBehaviouralEntity() {
        return this.localVariableParentBehaviouralEntity;
    }
    // oneMany.Setter
    setParentBehaviouralEntity(newParentBehaviouralEntity) {
        this.localVariableParentBehaviouralEntity = newParentBehaviouralEntity;
        newParentBehaviouralEntity.getLocalVariables().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.LocalVariable", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parentBehaviouralEntity", this.getParentBehaviouralEntity());
    }
}
exports.LocalVariable = LocalVariable;
//# sourceMappingURL=local_variable.js.map