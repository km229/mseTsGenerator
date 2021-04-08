"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const container_entity_1 = require("./container_entity");
class ScopingEntity extends container_entity_1.ContainerEntity {
    constructor() {
        super(...arguments);
        this.scopingEntityGlobalVariables = new Set();
        this.scopingEntityChildScopes = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "globalVariables", opposite = "parentScope", derived = true)
    getGlobalVariables() {
        return this.scopingEntityGlobalVariables;
    }
    // manyOne.Setter
    addGlobalVariables(scopingEntityGlobalVariables) {
        if (!this.scopingEntityGlobalVariables.has(scopingEntityGlobalVariables)) {
            this.scopingEntityGlobalVariables.add(scopingEntityGlobalVariables);
            scopingEntityGlobalVariables.setParentScope(this);
        }
    }
    // oneMany.Getter
    // @FameProperty(name = "parentScope", opposite = "childScopes")
    getParentScope() {
        return this.scopingEntityParentScope;
    }
    // oneMany.Setter
    setParentScope(newParentScope) {
        this.scopingEntityParentScope = newParentScope;
        newParentScope.getChildScopes().add(this);
    }
    // manyOne.Getter
    // @FameProperty(name = "childScopes", opposite = "parentScope", derived = true)
    getChildScopes() {
        return this.scopingEntityChildScopes;
    }
    // manyOne.Setter
    addChildScopes(scopingEntityChildScopes) {
        if (!this.scopingEntityChildScopes.has(scopingEntityChildScopes)) {
            this.scopingEntityChildScopes.add(scopingEntityChildScopes);
            scopingEntityChildScopes.setParentScope(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.ScopingEntity", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("globalVariables", this.getGlobalVariables());
        exporter.addProperty("parentScope", this.getParentScope());
        exporter.addProperty("childScopes", this.getChildScopes());
    }
}
exports.ScopingEntity = ScopingEntity;
//# sourceMappingURL=scoping_entity.js.map