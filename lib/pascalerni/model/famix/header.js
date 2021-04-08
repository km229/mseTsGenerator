"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const file_1 = require("../file/file");
class Header extends file_1.File {
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Header", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
    }
}
exports.Header = Header;
//# sourceMappingURL=header.js.map