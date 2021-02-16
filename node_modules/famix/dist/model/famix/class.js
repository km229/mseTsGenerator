"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const type_1 = require("./../famix/type");
class Class extends type_1.Type {
    // @FameProperty(name = "isTestCase")
    getIsTestCase() {
        return this.classIsTestCase;
    }
    setIsTestCase(classIsTestCase) {
        this.classIsTestCase = classIsTestCase;
    }
    // @FameProperty(name = "isInterface")
    getIsInterface() {
        return this.classIsInterface;
    }
    setIsInterface(classIsInterface) {
        this.classIsInterface = classIsInterface;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Class", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("isTestCase", this.getIsTestCase());
        exporter.addProperty("isInterface", this.getIsInterface());
    }
}
exports.Class = Class;
//# sourceMappingURL=class.js.map