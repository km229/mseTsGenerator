"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const named_entity_1 = require("./../famix/named_entity");
class ContainerEntity extends named_entity_1.NamedEntity {
    constructor() {
        super(...arguments);
        this.containerEntityTypes = new Set();
        this.containerEntityFunctions = new Set();
        this.containerEntityDefinedAnnotationTypes = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "types", opposite = "container", derived = true)
    getTypes() {
        return this.containerEntityTypes;
    }
    // manyOne.Setter
    addTypes(containerEntityTypes) {
        if (!this.containerEntityTypes.has(containerEntityTypes)) {
            this.containerEntityTypes.add(containerEntityTypes);
            containerEntityTypes.setContainer(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "functions", opposite = "container", derived = true)
    getFunctions() {
        return this.containerEntityFunctions;
    }
    // manyOne.Setter
    addFunctions(containerEntityFunctions) {
        if (!this.containerEntityFunctions.has(containerEntityFunctions)) {
            this.containerEntityFunctions.add(containerEntityFunctions);
            containerEntityFunctions.setContainer(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "definedAnnotationTypes", opposite = "container", derived = true)
    getDefinedAnnotationTypes() {
        return this.containerEntityDefinedAnnotationTypes;
    }
    // manyOne.Setter
    addDefinedAnnotationTypes(containerEntityDefinedAnnotationTypes) {
        if (!this.containerEntityDefinedAnnotationTypes.has(containerEntityDefinedAnnotationTypes)) {
            this.containerEntityDefinedAnnotationTypes.add(containerEntityDefinedAnnotationTypes);
            containerEntityDefinedAnnotationTypes.setContainer(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ContainerEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("types", this.getTypes());
        exporter.addProperty("functions", this.getFunctions());
        exporter.addProperty("definedAnnotationTypes", this.getDefinedAnnotationTypes());
    }
}
exports.ContainerEntity = ContainerEntity;
//# sourceMappingURL=container_entity.js.map