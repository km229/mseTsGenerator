"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const structural_entity_1 = require("./../famix/structural_entity");
class Parameter extends structural_entity_1.StructuralEntity {
    // oneMany.Getter
    // @FameProperty(name = "parentBehaviouralEntity", opposite = "parameters")
    getParentBehaviouralEntity() {
        return this.parameterParentBehaviouralEntity;
    }
    // oneMany.Setter
    setParentBehaviouralEntity(newParentBehaviouralEntity) {
        this.parameterParentBehaviouralEntity = newParentBehaviouralEntity;
        newParentBehaviouralEntity.getParameters().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Parameter", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("parentBehaviouralEntity", this.getParentBehaviouralEntity());
    }
}
exports.Parameter = Parameter;
//# sourceMappingURL=parameter.js.map