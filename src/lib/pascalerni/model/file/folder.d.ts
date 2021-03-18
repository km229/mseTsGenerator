import {FamixMseExporter} from "../../famix_mse_exporter";
import {AbstractFile} from "./../file/abstract_file";

export declare class Folder extends AbstractFile {
    private folderNumberOfFiles;
    getNumberOfFiles(): number;
    setNumberOfFiles(folderNumberOfFiles: number): void;
    private folderNumberOfFolders;
    getNumberOfFolders(): number;
    setNumberOfFolders(folderNumberOfFolders: number): void;
    private folderTotalNumberOfLinesOfText;
    getTotalNumberOfLinesOfText(): number;
    setTotalNumberOfLinesOfText(folderTotalNumberOfLinesOfText: number): void;
    private folderNumberOfLinesOfText;
    getNumberOfLinesOfText(): number;
    setNumberOfLinesOfText(folderNumberOfLinesOfText: number): void;
    private folderNumberOfEmptyLinesOfText;
    getNumberOfEmptyLinesOfText(): number;
    setNumberOfEmptyLinesOfText(folderNumberOfEmptyLinesOfText: number): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
