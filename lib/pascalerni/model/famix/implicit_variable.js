"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./structural_entity");
class ImplicitVariable extends structural_entity_1.StructuralEntity {
    // oneMany.Getter
    // @FameProperty(name = "parentBehaviouralEntity", opposite = "implicitVariables")
    getParentBehaviouralEntity() {
        return this.implicitVariableParentBehaviouralEntity;
    }
    // oneMany.Setter
    setParentBehaviouralEntity(newParentBehaviouralEntity) {
        this.implicitVariableParentBehaviouralEntity = newParentBehaviouralEntity;
        newParentBehaviouralEntity.getImplicitVariables().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ImplicitVariable", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parentBehaviouralEntity", this.getParentBehaviouralEntity());
    }
}
exports.ImplicitVariable = ImplicitVariable;
//# sourceMappingURL=implicit_variable.js.map