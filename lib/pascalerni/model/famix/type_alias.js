"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const type_1 = require("./type");
class TypeAlias extends type_1.Type {
    // oneMany.Getter
    // @FameProperty(name = "aliasedType", opposite = "typeAliases")
    getAliasedType() {
        return this.typeAliasAliasedType;
    }
    // oneMany.Setter
    setAliasedType(newAliasedType) {
        this.typeAliasAliasedType = newAliasedType;
        newAliasedType.getTypeAliases().add(this);
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.TypeAlias", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("aliasedType", this.getAliasedType());
    }
}
exports.TypeAlias = TypeAlias;
//# sourceMappingURL=type_alias.js.map