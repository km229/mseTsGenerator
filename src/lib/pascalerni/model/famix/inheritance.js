"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const association_1 = require("./../famix/association");
class Inheritance extends association_1.Association {
    // oneMany.Getter
    // @FameProperty(name = "superclass", opposite = "subInheritances")
    getSuperclass() {
        return this.inheritanceSuperclass;
    }
    // oneMany.Setter
    setSuperclass(newSuperclass) {
        this.inheritanceSuperclass = newSuperclass;
        newSuperclass.getSubInheritances().add(this);
    }
    // oneMany.Getter
    // @FameProperty(name = "subclass", opposite = "superInheritances")
    getSubclass() {
        return this.inheritanceSubclass;
    }
    // oneMany.Setter
    setSubclass(newSubclass) {
        this.inheritanceSubclass = newSubclass;
        newSubclass.getSuperInheritances().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Inheritance", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("superclass", this.getSuperclass());
        exporter.addProperty("subclass", this.getSubclass());
    }
}
exports.Inheritance = Inheritance;
//# sourceMappingURL=inheritance.js.map