"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const leaf_entity_1 = require("./../famix/leaf_entity");
class StructuralEntity extends leaf_entity_1.LeafEntity {
    constructor() {
        super(...arguments);
        this.structuralEntityIncomingAccesses = new Set();
        this.structuralEntityDereferencedInvocations = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "incomingAccesses", opposite = "variable", derived = true)
    getIncomingAccesses() {
        return this.structuralEntityIncomingAccesses;
    }
    // manyOne.Setter
    addIncomingAccesses(structuralEntityIncomingAccesses) {
        if (!this.structuralEntityIncomingAccesses.has(structuralEntityIncomingAccesses)) {
            this.structuralEntityIncomingAccesses.add(structuralEntityIncomingAccesses);
            structuralEntityIncomingAccesses.setVariable(this);
        }
    }
    // oneMany.Getter
    // @FameProperty(name = "declaredType", opposite = "structuresWithDeclaredType")
    getDeclaredType() {
        return this.structuralEntityDeclaredType;
    }
    // oneMany.Setter
    setDeclaredType(newDeclaredType) {
        this.structuralEntityDeclaredType = newDeclaredType;
        newDeclaredType.getStructuresWithDeclaredType().add(this);
    }
    // manyOne.Getter
    // @FameProperty(name = "dereferencedInvocations", opposite = "referencer", derived = true)
    getDereferencedInvocations() {
        return this.structuralEntityDereferencedInvocations;
    }
    // manyOne.Setter
    addDereferencedInvocations(structuralEntityDereferencedInvocations) {
        if (!this.structuralEntityDereferencedInvocations.has(structuralEntityDereferencedInvocations)) {
            this.structuralEntityDereferencedInvocations.add(structuralEntityDereferencedInvocations);
            structuralEntityDereferencedInvocations.setReferencer(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.StructuralEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("incomingAccesses", this.getIncomingAccesses());
        exporter.addProperty("declaredType", this.getDeclaredType());
        exporter.addProperty("dereferencedInvocations", this.getDereferencedInvocations());
    }
}
exports.StructuralEntity = StructuralEntity;
//# sourceMappingURL=structural_entity.js.map