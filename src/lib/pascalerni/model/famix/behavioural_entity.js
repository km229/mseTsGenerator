"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const container_entity_1 = require("./../famix/container_entity");
class BehaviouralEntity extends container_entity_1.ContainerEntity {
    constructor() {
        super(...arguments);
        this.behaviouralEntityImplicitVariables = new Set();
        this.behaviouralEntityLocalVariables = new Set();
        this.behaviouralEntityOutgoingReferences = new Set();
        this.behaviouralEntityOutgoingInvocations = new Set();
        this.behaviouralEntityIncomingInvocations = new Set();
        this.behaviouralEntityAccesses = new Set();
        this.behaviouralEntityParameters = new Set();
    }
    // @FameProperty(name = "signature")
    getSignature() {
        return this.behaviouralEntitySignature;
    }
    setSignature(behaviouralEntitySignature) {
        this.behaviouralEntitySignature = behaviouralEntitySignature;
    }
    // @FameProperty(name = "numberOfParameters")
    getNumberOfParameters() {
        return this.behaviouralEntityNumberOfParameters;
    }
    setNumberOfParameters(behaviouralEntityNumberOfParameters) {
        this.behaviouralEntityNumberOfParameters = behaviouralEntityNumberOfParameters;
    }
    // oneMany.Getter
    // @FameProperty(name = "declaredType", opposite = "behavioursWithDeclaredType")
    getDeclaredType() {
        return this.behaviouralEntityDeclaredType;
    }
    // oneMany.Setter
    setDeclaredType(newDeclaredType) {
        this.behaviouralEntityDeclaredType = newDeclaredType;
        newDeclaredType.getBehavioursWithDeclaredType().add(this);
    }
    // @FameProperty(name = "cyclomaticComplexity")
    getCyclomaticComplexity() {
        return this.behaviouralEntityCyclomaticComplexity;
    }
    setCyclomaticComplexity(behaviouralEntityCyclomaticComplexity) {
        this.behaviouralEntityCyclomaticComplexity = behaviouralEntityCyclomaticComplexity;
    }
    // @FameProperty(name = "numberOfComments")
    getNumberOfComments() {
        return this.behaviouralEntityNumberOfComments;
    }
    setNumberOfComments(behaviouralEntityNumberOfComments) {
        this.behaviouralEntityNumberOfComments = behaviouralEntityNumberOfComments;
    }
    // manyOne.Getter
    // @FameProperty(name = "implicitVariables", opposite = "parentBehaviouralEntity", derived = true)
    getImplicitVariables() {
        return this.behaviouralEntityImplicitVariables;
    }
    // manyOne.Setter
    addImplicitVariables(behaviouralEntityImplicitVariables) {
        if (!this.behaviouralEntityImplicitVariables.has(behaviouralEntityImplicitVariables)) {
            this.behaviouralEntityImplicitVariables.add(behaviouralEntityImplicitVariables);
            behaviouralEntityImplicitVariables.setParentBehaviouralEntity(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "localVariables", opposite = "parentBehaviouralEntity", derived = true)
    getLocalVariables() {
        return this.behaviouralEntityLocalVariables;
    }
    // manyOne.Setter
    addLocalVariables(behaviouralEntityLocalVariables) {
        if (!this.behaviouralEntityLocalVariables.has(behaviouralEntityLocalVariables)) {
            this.behaviouralEntityLocalVariables.add(behaviouralEntityLocalVariables);
            behaviouralEntityLocalVariables.setParentBehaviouralEntity(this);
        }
    }
    // @FameProperty(name = "numberOfStatements")
    getNumberOfStatements() {
        return this.behaviouralEntityNumberOfStatements;
    }
    setNumberOfStatements(behaviouralEntityNumberOfStatements) {
        this.behaviouralEntityNumberOfStatements = behaviouralEntityNumberOfStatements;
    }
    // manyOne.Getter
    // @FameProperty(name = "outgoingReferences", opposite = "source", derived = true)
    getOutgoingReferences() {
        return this.behaviouralEntityOutgoingReferences;
    }
    // manyOne.Setter
    addOutgoingReferences(behaviouralEntityOutgoingReferences) {
        if (!this.behaviouralEntityOutgoingReferences.has(behaviouralEntityOutgoingReferences)) {
            this.behaviouralEntityOutgoingReferences.add(behaviouralEntityOutgoingReferences);
            behaviouralEntityOutgoingReferences.setSource(this);
        }
    }
    // @FameProperty(name = "numberOfLinesOfCode")
    getNumberOfLinesOfCode() {
        return this.behaviouralEntityNumberOfLinesOfCode;
    }
    setNumberOfLinesOfCode(behaviouralEntityNumberOfLinesOfCode) {
        this.behaviouralEntityNumberOfLinesOfCode = behaviouralEntityNumberOfLinesOfCode;
    }
    // manyOne.Getter
    // @FameProperty(name = "outgoingInvocations", opposite = "sender", derived = true)
    getOutgoingInvocations() {
        return this.behaviouralEntityOutgoingInvocations;
    }
    // manyOne.Setter
    addOutgoingInvocations(behaviouralEntityOutgoingInvocations) {
        if (!this.behaviouralEntityOutgoingInvocations.has(behaviouralEntityOutgoingInvocations)) {
            this.behaviouralEntityOutgoingInvocations.add(behaviouralEntityOutgoingInvocations);
            behaviouralEntityOutgoingInvocations.setSender(this);
        }
    }
    // manyMany.Getter
    // @FameProperty(name = "incomingInvocations", opposite = "candidates", derived = true)
    getIncomingInvocations() {
        return this.behaviouralEntityIncomingInvocations;
    }
    // manyMany.Setter
    addIncomingInvocations(newIncomingInvocations) {
        if (!this.behaviouralEntityIncomingInvocations.has(newIncomingInvocations)) {
            this.behaviouralEntityIncomingInvocations.add(newIncomingInvocations);
            newIncomingInvocations.getCandidates().add(this);
        }
    }
    // @FameProperty(name = "numberOfConditionals")
    getNumberOfConditionals() {
        return this.behaviouralEntityNumberOfConditionals;
    }
    setNumberOfConditionals(behaviouralEntityNumberOfConditionals) {
        this.behaviouralEntityNumberOfConditionals = behaviouralEntityNumberOfConditionals;
    }
    // manyOne.Getter
    // @FameProperty(name = "accesses", opposite = "accessor", derived = true)
    getAccesses() {
        return this.behaviouralEntityAccesses;
    }
    // manyOne.Setter
    addAccesses(behaviouralEntityAccesses) {
        if (!this.behaviouralEntityAccesses.has(behaviouralEntityAccesses)) {
            this.behaviouralEntityAccesses.add(behaviouralEntityAccesses);
            behaviouralEntityAccesses.setAccessor(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "parameters", opposite = "parentBehaviouralEntity", derived = true)
    getParameters() {
        return this.behaviouralEntityParameters;
    }
    // manyOne.Setter
    addParameters(behaviouralEntityParameters) {
        if (!this.behaviouralEntityParameters.has(behaviouralEntityParameters)) {
            this.behaviouralEntityParameters.add(behaviouralEntityParameters);
            behaviouralEntityParameters.setParentBehaviouralEntity(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.BehaviouralEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("signature", this.getSignature());
        exporter.addProperty("numberOfParameters", this.getNumberOfParameters());
        exporter.addProperty("declaredType", this.getDeclaredType());
        exporter.addProperty("cyclomaticComplexity", this.getCyclomaticComplexity());
        exporter.addProperty("numberOfComments", this.getNumberOfComments());
        exporter.addProperty("implicitVariables", this.getImplicitVariables());
        exporter.addProperty("localVariables", this.getLocalVariables());
        exporter.addProperty("numberOfStatements", this.getNumberOfStatements());
        exporter.addProperty("outgoingReferences", this.getOutgoingReferences());
        exporter.addProperty("numberOfLinesOfCode", this.getNumberOfLinesOfCode());
        exporter.addProperty("outgoingInvocations", this.getOutgoingInvocations());
        exporter.addProperty("incomingInvocations", this.getIncomingInvocations());
        exporter.addProperty("numberOfConditionals", this.getNumberOfConditionals());
        exporter.addProperty("accesses", this.getAccesses());
        exporter.addProperty("parameters", this.getParameters());
    }
}
exports.BehaviouralEntity = BehaviouralEntity;
//# sourceMappingURL=behavioural_entity.js.map