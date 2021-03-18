"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const file_1 = require("./../file/file");
class CompilationUnit extends file_1.File {
    // @FameProperty(name = "module", opposite = "compilationUnit")
    getModule() {
        return this.compilationUnitModule;
    }
    setModule(newModule) {
        if (this.compilationUnitModule === undefined) {
            this.compilationUnitModule = newModule;
            newModule.setCompilationUnit(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.CompilationUnit", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("module", this.getModule());
    }
}
exports.CompilationUnit = CompilationUnit;
//# sourceMappingURL=compilation_unit.js.map