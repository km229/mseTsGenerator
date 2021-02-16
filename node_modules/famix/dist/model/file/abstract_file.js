"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./../famix/entity");
class AbstractFile extends entity_1.Entity {
    // @FameProperty(name = "name")
    getName() {
        return this.abstractFileName;
    }
    setName(abstractFileName) {
        this.abstractFileName = abstractFileName;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FILE.AbstractFile", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("name", this.getName());
    }
}
exports.AbstractFile = AbstractFile;
//# sourceMappingURL=abstract_file.js.map