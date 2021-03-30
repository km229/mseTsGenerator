"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./entity");
class AnnotationInstance extends entity_1.Entity {
    constructor() {
        super(...arguments);
        this.annotationInstanceAttributes = new Set();
    }
    // oneMany.Getter
    // @FameProperty(name = "annotatedEntity", opposite = "annotationInstances")
    getAnnotatedEntity() {
        return this.annotationInstanceAnnotatedEntity;
    }
    // oneMany.Setter
    setAnnotatedEntity(newAnnotatedEntity) {
        this.annotationInstanceAnnotatedEntity = newAnnotatedEntity;
        newAnnotatedEntity.getAnnotationInstances().add(this);
    }
    // oneMany.Getter
    // @FameProperty(name = "annotationType", opposite = "instances")
    getAnnotationType() {
        return this.annotationInstanceAnnotationType;
    }
    // oneMany.Setter
    setAnnotationType(newAnnotationType) {
        this.annotationInstanceAnnotationType = newAnnotationType;
        newAnnotationType.getInstances().add(this);
    }
    // manyOne.Getter
    // @FameProperty(name = "attributes", opposite = "parentAnnotationInstance", derived = true)
    getAttributes() {
        return this.annotationInstanceAttributes;
    }
    // manyOne.Setter
    addAttributes(annotationInstanceAttributes) {
        if (!this.annotationInstanceAttributes.has(annotationInstanceAttributes)) {
            this.annotationInstanceAttributes.add(annotationInstanceAttributes);
            annotationInstanceAttributes.setParentAnnotationInstance(this);
        }
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationInstance", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("annotatedEntity", this.getAnnotatedEntity());
        exporter.addProperty("annotationType", this.getAnnotationType());
        exporter.addProperty("attributes", this.getAttributes());
    }
}
exports.AnnotationInstance = AnnotationInstance;
//# sourceMappingURL=annotation_instance.js.map