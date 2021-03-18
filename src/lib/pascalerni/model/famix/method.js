"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const behavioural_entity_1 = require("./../famix/behavioural_entity");
class Method extends behavioural_entity_1.BehaviouralEntity {
    constructor() {
        super(...arguments);
        this.methodThrownExceptions = new Set();
        this.methodCaughtExceptions = new Set();
        this.methodDeclaredExceptions = new Set();
    }
    // @FameProperty(name = "kind")
    getKind() {
        return this.methodKind;
    }
    setKind(methodKind) {
        this.methodKind = methodKind;
    }
    // manyOne.Getter
    // @FameProperty(name = "thrownExceptions", opposite = "definingMethod", derived = true)
    getThrownExceptions() {
        return this.methodThrownExceptions;
    }
    // manyOne.Setter
    addThrownExceptions(methodThrownExceptions) {
        if (!this.methodThrownExceptions.has(methodThrownExceptions)) {
            this.methodThrownExceptions.add(methodThrownExceptions);
            methodThrownExceptions.setDefiningMethod(this);
        }
    }
    // manyOne.Getter
    // @FameProperty(name = "caughtExceptions", opposite = "definingMethod", derived = true)
    getCaughtExceptions() {
        return this.methodCaughtExceptions;
    }
    // manyOne.Setter
    addCaughtExceptions(methodCaughtExceptions) {
        if (!this.methodCaughtExceptions.has(methodCaughtExceptions)) {
            this.methodCaughtExceptions.add(methodCaughtExceptions);
            methodCaughtExceptions.setDefiningMethod(this);
        }
    }
    // @FameProperty(name = "hasClassScope")
    getHasClassScope() {
        return this.methodHasClassScope;
    }
    setHasClassScope(methodHasClassScope) {
        this.methodHasClassScope = methodHasClassScope;
    }
    // oneMany.Getter
    // @FameProperty(name = "parentType", opposite = "methods")
    getParentType() {
        return this.methodParentType;
    }
    // oneMany.Setter
    setParentType(newParentType) {
        this.methodParentType = newParentType;
        newParentType.getMethods().add(this);
    }
    // @FameProperty(name = "timeStamp")
    getTimeStamp() {
        return this.methodTimeStamp;
    }
    setTimeStamp(methodTimeStamp) {
        this.methodTimeStamp = methodTimeStamp;
    }
    // manyOne.Getter
    // @FameProperty(name = "declaredExceptions", opposite = "definingMethod", derived = true)
    getDeclaredExceptions() {
        return this.methodDeclaredExceptions;
    }
    // manyOne.Setter
    addDeclaredExceptions(methodDeclaredExceptions) {
        if (!this.methodDeclaredExceptions.has(methodDeclaredExceptions)) {
            this.methodDeclaredExceptions.add(methodDeclaredExceptions);
            methodDeclaredExceptions.setDefiningMethod(this);
        }
    }
    // @FameProperty(name = "category")
    getCategory() {
        return this.methodCategory;
    }
    setCategory(methodCategory) {
        this.methodCategory = methodCategory;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Method", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("timeStamp", this.getTimeStamp());
        exporter.addProperty("kind", this.getKind());
        exporter.addProperty("thrownExceptions", this.getThrownExceptions());
        exporter.addProperty("caughtExceptions", this.getCaughtExceptions());
        exporter.addProperty("declaredExceptions", this.getDeclaredExceptions());
        exporter.addProperty("hasClassScope", this.getHasClassScope());
        exporter.addProperty("category", this.getCategory());
        exporter.addProperty("parentType", this.getParentType());
    }
}
exports.Method = Method;
//# sourceMappingURL=method.js.map