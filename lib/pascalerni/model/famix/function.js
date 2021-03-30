"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const behavioural_entity_1 = require("./behavioural_entity");
class Function extends behavioural_entity_1.BehaviouralEntity {
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "functions")
    getContainer() {
        return this.functionContainer;
    }
    // oneMany.Setter
    setContainer(newContainer) {
        this.functionContainer = newContainer;
        newContainer.getFunctions().add(this);
    }
    // @FameProperty(name = "parentModule")
    getParentModule() {
        return this.functionParentModule;
    }
    setParentModule(functionParentModule) {
        this.functionParentModule = functionParentModule;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Function", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("parentModule", this.getParentModule());
    }
}
exports.Function = Function;
//# sourceMappingURL=function.js.map