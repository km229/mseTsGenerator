"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const abstract_file_1 = require("./abstract_file");
class Folder extends abstract_file_1.AbstractFile {
    // @FameProperty(name = "numberOfFiles")
    getNumberOfFiles() {
        return this.folderNumberOfFiles;
    }
    setNumberOfFiles(folderNumberOfFiles) {
        this.folderNumberOfFiles = folderNumberOfFiles;
    }
    // @FameProperty(name = "numberOfFolders")
    getNumberOfFolders() {
        return this.folderNumberOfFolders;
    }
    setNumberOfFolders(folderNumberOfFolders) {
        this.folderNumberOfFolders = folderNumberOfFolders;
    }
    // @FameProperty(name = "totalNumberOfLinesOfText")
    getTotalNumberOfLinesOfText() {
        return this.folderTotalNumberOfLinesOfText;
    }
    setTotalNumberOfLinesOfText(folderTotalNumberOfLinesOfText) {
        this.folderTotalNumberOfLinesOfText = folderTotalNumberOfLinesOfText;
    }
    // @FameProperty(name = "numberOfLinesOfText")
    getNumberOfLinesOfText() {
        return this.folderNumberOfLinesOfText;
    }
    setNumberOfLinesOfText(folderNumberOfLinesOfText) {
        this.folderNumberOfLinesOfText = folderNumberOfLinesOfText;
    }
    // @FameProperty(name = "numberOfEmptyLinesOfText")
    getNumberOfEmptyLinesOfText() {
        return this.folderNumberOfEmptyLinesOfText;
    }
    setNumberOfEmptyLinesOfText(folderNumberOfEmptyLinesOfText) {
        this.folderNumberOfEmptyLinesOfText = folderNumberOfEmptyLinesOfText;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Folder", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("numberOfFiles", this.getNumberOfFiles());
        exporter.addProperty("numberOfFolders", this.getNumberOfFolders());
        exporter.addProperty("totalNumberOfLinesOfText", this.getTotalNumberOfLinesOfText());
        exporter.addProperty("numberOfLinesOfText", this.getNumberOfLinesOfText());
        exporter.addProperty("numberOfEmptyLinesOfText", this.getNumberOfEmptyLinesOfText());
    }
}
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map