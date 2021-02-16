"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const type_1 = require("./../famix/type");
class AnnotationType extends type_1.Type {
    constructor() {
        super(...arguments);
        this.annotationTypeInstances = new Set();
    }
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "definedAnnotationTypes")
    getContainer() {
        return this.annotationTypeContainer;
    }
    // oneMany.Setter
    setContainer(newContainer) {
        this.annotationTypeContainer = newContainer;
        newContainer.getDefinedAnnotationTypes().add(this);
    }
    // manyOne.Getter
    // @FameProperty(name = "instances", opposite = "annotationType", derived = true)
    getInstances() {
        return this.annotationTypeInstances;
    }
    // manyOne.Setter
    addInstances(annotationTypeInstances) {
        if (!this.annotationTypeInstances.has(annotationTypeInstances)) {
            this.annotationTypeInstances.add(annotationTypeInstances);
            annotationTypeInstances.setAnnotationType(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationType", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("instances", this.getInstances());
    }
}
exports.AnnotationType = AnnotationType;
//# sourceMappingURL=annotation_type.js.map