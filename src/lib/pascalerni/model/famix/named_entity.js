"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const sourced_entity_1 = require("./../famix/sourced_entity");
class NamedEntity extends sourced_entity_1.SourcedEntity {
    constructor() {
        super(...arguments);
        this.namedEntityReceivingInvocations = new Set();
        this.namedEntityModifiers = new Set();
        this.namedEntityAnnotationInstances = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "receivingInvocations", opposite = "receiver", derived = true)
    getReceivingInvocations() {
        return this.namedEntityReceivingInvocations;
    }
    // manyOne.Setter
    addReceivingInvocations(namedEntityReceivingInvocations) {
        if (!this.namedEntityReceivingInvocations.has(namedEntityReceivingInvocations)) {
            this.namedEntityReceivingInvocations.add(namedEntityReceivingInvocations);
            namedEntityReceivingInvocations.setReceiver(this);
        }
    }
    // @FameProperty(name = "modifiers")
    // many.getter
    getModifiers() {
        return this.namedEntityModifiers;
    }
    // many.Setter
    addModifiers(newModifiers) {
        if (!this.namedEntityModifiers.has(newModifiers)) {
            this.namedEntityModifiers.add(newModifiers);
        }
    }
    // @FameProperty(name = "isStub")
    getIsStub() {
        return this.namedEntityIsStub;
    }
    setIsStub(namedEntityIsStub) {
        this.namedEntityIsStub = namedEntityIsStub;
    }
    // @FameProperty(name = "name")
    getName() {
        return this.namedEntityName;
    }
    setName(namedEntityName) {
        this.namedEntityName = namedEntityName;
    }
    // manyOne.Getter
    // @FameProperty(name = "annotationInstances", opposite = "annotatedEntity", derived = true)
    getAnnotationInstances() {
        return this.namedEntityAnnotationInstances;
    }
    // manyOne.Setter
    addAnnotationInstances(namedEntityAnnotationInstances) {
        if (!this.namedEntityAnnotationInstances.has(namedEntityAnnotationInstances)) {
            this.namedEntityAnnotationInstances.add(namedEntityAnnotationInstances);
            namedEntityAnnotationInstances.setAnnotatedEntity(this);
        }
    }
    // oneMany.Getter
    // @FameProperty(name = "parentPackage", opposite = "childNamedEntities")
    getParentPackage() {
        return this.namedEntityParentPackage;
    }
    // oneMany.Setter
    setParentPackage(newParentPackage) {
        this.namedEntityParentPackage = newParentPackage;
        newParentPackage.getChildNamedEntities().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.NamedEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("isStub", this.getIsStub());
        exporter.addProperty("receivingInvocations", this.getReceivingInvocations());
        exporter.addProperty("name", this.getName());
        exporter.addProperty("modifiers", this.getModifiers());
        exporter.addProperty("annotationInstances", this.getAnnotationInstances());
        exporter.addProperty("parentPackage", this.getParentPackage());
    }
}
exports.NamedEntity = NamedEntity;
//# sourceMappingURL=named_entity.js.map