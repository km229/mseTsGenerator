"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const sourced_entity_1 = require("./../famix/sourced_entity");
class Association extends sourced_entity_1.SourcedEntity {
    // @FameProperty(name = "next", opposite = "previous", derived = true)
    getNext() {
        return this.associationNext;
    }
    setNext(newNext) {
        if (this.associationNext === undefined) {
            this.associationNext = newNext;
            newNext.setPrevious(this);
        }
    }
    // @FameProperty(name = "previous", opposite = "next")
    getPrevious() {
        return this.associationPrevious;
    }
    setPrevious(newPrevious) {
        if (this.associationPrevious === undefined) {
            this.associationPrevious = newPrevious;
            newPrevious.setNext(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Association", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("next", this.getNext());
        exporter.addProperty("previous", this.getPrevious());
    }
}
exports.Association = Association;
//# sourceMappingURL=association.js.map