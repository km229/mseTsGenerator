"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const scoping_entity_1 = require("./scoping_entity");
class Package extends scoping_entity_1.ScopingEntity {
    constructor() {
        super(...arguments);
        this.packageChildNamedEntities = new Set();
    }
    // @FameProperty(name = "numberOfClientPackages")
    getNumberOfClientPackages() {
        return this.packageNumberOfClientPackages;
    }
    setNumberOfClientPackages(packageNumberOfClientPackages) {
        this.packageNumberOfClientPackages = packageNumberOfClientPackages;
    }
    // manyOne.Getter
    // @FameProperty(name = "childNamedEntities", opposite = "parentPackage", derived = true)
    getChildNamedEntities() {
        return this.packageChildNamedEntities;
    }
    // manyOne.Setter
    addChildNamedEntities(packageChildNamedEntities) {
        if (!this.packageChildNamedEntities.has(packageChildNamedEntities)) {
            this.packageChildNamedEntities.add(packageChildNamedEntities);
            packageChildNamedEntities.setParentPackage(this);
        }
    }
    // @FameProperty(name = "numberOfMethods")
    getNumberOfMethods() {
        return this.packageNumberOfMethods;
    }
    setNumberOfMethods(packageNumberOfMethods) {
        this.packageNumberOfMethods = packageNumberOfMethods;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Package", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("numberOfClientPackages", this.getNumberOfClientPackages());
        exporter.addProperty("numberOfMethods", this.getNumberOfMethods());
        exporter.addProperty("childNamedEntities", this.getChildNamedEntities());
    }
}
exports.Package = Package;
//# sourceMappingURL=package.js.map