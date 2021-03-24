"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./../famix/entity");
class SourceAnchor extends entity_1.Entity {
    // @FameProperty(name = "element", opposite = "sourceAnchor")
    getElement() {
        return this.sourceAnchorElement;
    }
    setElement(newElement) {
        if (this.sourceAnchorElement === undefined) {
            this.sourceAnchorElement = newElement;
            newElement.setSourceAnchor(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.SourceAnchor", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("element", this.getElement());
    }
}
exports.SourceAnchor = SourceAnchor;
//# sourceMappingURL=source_anchor.js.map