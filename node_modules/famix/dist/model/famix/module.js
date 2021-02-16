"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const scoping_entity_1 = require("./../famix/scoping_entity");
class Module extends scoping_entity_1.ScopingEntity {
    // @FameProperty(name = "compilationUnit", opposite = "module")
    getCompilationUnit() {
        return this.moduleCompilationUnit;
    }
    setCompilationUnit(newCompilationUnit) {
        if (this.moduleCompilationUnit === undefined) {
            this.moduleCompilationUnit = newCompilationUnit;
            newCompilationUnit.setModule(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Module", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("compilationUnit", this.getCompilationUnit());
    }
}
exports.Module = Module;
//# sourceMappingURL=module.js.map