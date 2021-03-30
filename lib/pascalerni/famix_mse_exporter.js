"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const famix_base_element_1 = require("./famix_base_element");
class FamixMseExporter {
    constructor(packageClass, element) {
        this.element = element;
        this.buffer = `(${packageClass}  (id: ${this.element.id})`;
    }
    addProperty(name, prop) {
        if (prop === undefined) {
            return;
        }
        if ((prop instanceof Set) && (prop.size === 0)) {
            return;
        }
        if (prop instanceof Set) {
            let valueBuffer = "";
            for (const value of prop) {
                if (valueBuffer.length > 0) {
                    valueBuffer = valueBuffer + " ";
                }
                if (typeof (value) === "string") {
                    valueBuffer = valueBuffer + `'${value}'`;
                }
                else if (value instanceof famix_base_element_1.FamixBaseElement) {
                    valueBuffer = valueBuffer + `(ref: ${value.id})`;
                }
                else {
                    valueBuffer = valueBuffer + `${value}`;
                }
            }
            this.buffer = this.buffer + `\n    (${name} ${valueBuffer})`;
        }
        else if (prop instanceof famix_base_element_1.FamixBaseElement) {
            this.buffer = this.buffer + `\n    (${name} (ref: ${prop.id}))`;
        }
        else if (typeof (prop) === "string") {
            this.buffer = this.buffer + `\n    (${name} '${prop}')`;
        }
        else {
            this.buffer = this.buffer + `\n    (${name} ${prop})`;
        }
    }
    getMSE() {
        return this.buffer + ")\n";
    }
}
exports.FamixMseExporter = FamixMseExporter;
//# sourceMappingURL=famix_mse_exporter.js.map