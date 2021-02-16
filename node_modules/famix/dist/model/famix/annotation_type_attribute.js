"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const attribute_1 = require("./../famix/attribute");
class AnnotationTypeAttribute extends attribute_1.Attribute {
    constructor() {
        super(...arguments);
        this.annotationTypeAttributeAnnotationAttributeInstances = new Set();
    }
    // manyOne.Getter
    // @FameProperty(name = "annotationAttributeInstances", opposite = "annotationTypeAttribute", derived = true)
    getAnnotationAttributeInstances() {
        return this.annotationTypeAttributeAnnotationAttributeInstances;
    }
    // manyOne.Setter
    addAnnotationAttributeInstances(annotationTypeAttributeAnnotationAttributeInstances) {
        if (!this.annotationTypeAttributeAnnotationAttributeInstances.has(annotationTypeAttributeAnnotationAttributeInstances)) {
            this.annotationTypeAttributeAnnotationAttributeInstances.add(annotationTypeAttributeAnnotationAttributeInstances);
            annotationTypeAttributeAnnotationAttributeInstances.setAnnotationTypeAttribute(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationTypeAttribute", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("annotationAttributeInstances", this.getAnnotationAttributeInstances());
    }
}
exports.AnnotationTypeAttribute = AnnotationTypeAttribute;
//# sourceMappingURL=annotation_type_attribute.js.map