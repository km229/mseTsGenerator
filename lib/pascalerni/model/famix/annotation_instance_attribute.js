"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const entity_1 = require("./entity");
class AnnotationInstanceAttribute extends entity_1.Entity {
    // oneMany.Getter
    // @FameProperty(name = "annotationTypeAttribute", opposite = "annotationAttributeInstances")
    getAnnotationTypeAttribute() {
        return this.annotationInstanceAttributeAnnotationTypeAttribute;
    }
    // oneMany.Setter
    setAnnotationTypeAttribute(newAnnotationTypeAttribute) {
        this.annotationInstanceAttributeAnnotationTypeAttribute = newAnnotationTypeAttribute;
        newAnnotationTypeAttribute.getAnnotationAttributeInstances().add(this);
    }
    // oneMany.Getter
    // @FameProperty(name = "parentAnnotationInstance", opposite = "attributes")
    getParentAnnotationInstance() {
        return this.annotationInstanceAttributeParentAnnotationInstance;
    }
    // oneMany.Setter
    setParentAnnotationInstance(newParentAnnotationInstance) {
        this.annotationInstanceAttributeParentAnnotationInstance = newParentAnnotationInstance;
        newParentAnnotationInstance.getAttributes().add(this);
    }
    // @FameProperty(name = "value")
    getValue() {
        return this.annotationInstanceAttributeValue;
    }
    setValue(annotationInstanceAttributeValue) {
        this.annotationInstanceAttributeValue = annotationInstanceAttributeValue;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.AnnotationInstanceAttribute", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("annotationTypeAttribute", this.getAnnotationTypeAttribute());
        exporter.addProperty("parentAnnotationInstance", this.getParentAnnotationInstance());
        exporter.addProperty("value", this.getValue());
    }
}
exports.AnnotationInstanceAttribute = AnnotationInstanceAttribute;
//# sourceMappingURL=annotation_instance_attribute.js.map