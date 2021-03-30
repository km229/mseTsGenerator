"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const container_entity_1 = require("./container_entity");
class Type extends container_entity_1.ContainerEntity {
    constructor() {
        super(...arguments);
        this.typeIncomingReferences = new Set();
        this.typeStructuresWithDeclaredType = new Set();
        this.typeTypeAliases = new Set();
        this.typeSuperInheritances = new Set();
        this.typeSubInheritances = new Set();
        this.typeBehavioursWithDeclaredType = new Set();
        this.typeMethods = new Set();
        this.typeAttributes = new Set();
        this.typeArgumentsInParameterizedTypes = new Set();
    }
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "types")
    getContainer() {
        return this.typeContainer;
    }
    // oneMany.Setter
    setContainer(newContainer) {
        this.typeContainer = newContainer;
        newContainer.getTypes().add(this);
    }
    // manyOne.Getter
    // @FameProperty(name = "incomingReferences", opposite = "target", derived = true)
    getIncomingReferences() {
        return this.typeIncomingReferences;
    }
    // manyOne.Setter
    addIncomingReferences(typeIncomingReferences) {
        if (!this.typeIncomingReferences.has(typeIncomingReferences)) {
            this.typeIncomingReferences.add(typeIncomingReferences);
            typeIncomingReferences.setTarget(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "structuresWithDeclaredType", opposite = "declaredType", derived = true)
    getStructuresWithDeclaredType() {
        return this.typeStructuresWithDeclaredType;
    }
    // manyOne.Setter
    addStructuresWithDeclaredType(typeStructuresWithDeclaredType) {
        if (!this.typeStructuresWithDeclaredType.has(typeStructuresWithDeclaredType)) {
            this.typeStructuresWithDeclaredType.add(typeStructuresWithDeclaredType);
            typeStructuresWithDeclaredType.setDeclaredType(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "typeAliases", opposite = "aliasedType", derived = true)
    getTypeAliases() {
        return this.typeTypeAliases;
    }
    // manyOne.Setter
    addTypeAliases(typeTypeAliases) {
        if (!this.typeTypeAliases.has(typeTypeAliases)) {
            this.typeTypeAliases.add(typeTypeAliases);
            typeTypeAliases.setAliasedType(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "superInheritances", opposite = "subclass", derived = true)
    getSuperInheritances() {
        return this.typeSuperInheritances;
    }
    // manyOne.Setter
    addSuperInheritances(typeSuperInheritances) {
        if (!this.typeSuperInheritances.has(typeSuperInheritances)) {
            this.typeSuperInheritances.add(typeSuperInheritances);
            typeSuperInheritances.setSubclass(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "subInheritances", opposite = "superclass", derived = true)
    getSubInheritances() {
        return this.typeSubInheritances;
    }
    // manyOne.Setter
    addSubInheritances(typeSubInheritances) {
        if (!this.typeSubInheritances.has(typeSubInheritances)) {
            this.typeSubInheritances.add(typeSubInheritances);
            typeSubInheritances.setSuperclass(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "behavioursWithDeclaredType", opposite = "declaredType", derived = true)
    getBehavioursWithDeclaredType() {
        return this.typeBehavioursWithDeclaredType;
    }
    // manyOne.Setter
    addBehavioursWithDeclaredType(typeBehavioursWithDeclaredType) {
        if (!this.typeBehavioursWithDeclaredType.has(typeBehavioursWithDeclaredType)) {
            this.typeBehavioursWithDeclaredType.add(typeBehavioursWithDeclaredType);
            typeBehavioursWithDeclaredType.setDeclaredType(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "methods", opposite = "parentType", derived = true)
    getMethods() {
        return this.typeMethods;
    }
    // manyOne.Setter
    addMethods(typeMethods) {
        if (!this.typeMethods.has(typeMethods)) {
            this.typeMethods.add(typeMethods);
            typeMethods.setParentType(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "attributes", opposite = "parentType", derived = true)
    getAttributes() {
        return this.typeAttributes;
    }
    // manyOne.Setter
    addAttributes(typeAttributes) {
        if (!this.typeAttributes.has(typeAttributes)) {
            this.typeAttributes.add(typeAttributes);
            typeAttributes.setParentType(this);
        }
    }
    // manyMany.Getter
    // @FameProperty(name = "argumentsInParameterizedTypes", opposite = "arguments", derived = true)
    getArgumentsInParameterizedTypes() {
        return this.typeArgumentsInParameterizedTypes;
    }
    // manyMany.Setter
    addArgumentsInParameterizedTypes(newArgumentsInParameterizedTypes) {
        if (!this.typeArgumentsInParameterizedTypes.has(newArgumentsInParameterizedTypes)) {
            this.typeArgumentsInParameterizedTypes.add(newArgumentsInParameterizedTypes);
            newArgumentsInParameterizedTypes.getArguments().add(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Type", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("typeAliases", this.getTypeAliases());
        exporter.addProperty("superInheritances", this.getSuperInheritances());
        exporter.addProperty("subInheritances", this.getSubInheritances());
        exporter.addProperty("behavioursWithDeclaredType", this.getBehavioursWithDeclaredType());
        exporter.addProperty("structuresWithDeclaredType", this.getStructuresWithDeclaredType());
        exporter.addProperty("methods", this.getMethods());
        exporter.addProperty("attributes", this.getAttributes());
        exporter.addProperty("argumentsInParameterizedTypes", this.getArgumentsInParameterizedTypes());
        exporter.addProperty("incomingReferences", this.getIncomingReferences());
    }
}
exports.Type = Type;
//# sourceMappingURL=type.js.map