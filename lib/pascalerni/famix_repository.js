"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const famix_1 = require("./model/famix");
const famix_2 = require("./model/famix");
class FamixRepository {
    constructor() {
        this.elements = new Set();
        this.famixClasses = new Set();
        this.idCounter = 1;
        this.lang = new famix_2.CustomSourceLanguage(this);
        this.lang.setName("TypeScript");
    }
    static getFamixRepo() {
        if (this.repo === undefined) {
            this.repo = new FamixRepository();
        }
        return this.repo;
    }
    createOrGetFamixClass(name, isInterface) {
        let newClass = this.getFamixClass(name);
        if (newClass === undefined) {
            newClass = new famix_1.Class(this);
            newClass.setName(name.toLowerCase());
            newClass.setIsStub(true);
            if ((isInterface !== undefined) && (isInterface)) {
                newClass.setIsInterface(true);
            }
        }
        return newClass;
    }
    getFamixClass(name) {
        for (const fc of this.famixClasses) {
            if (fc.getName().toLowerCase() === name.toLowerCase()) {
                return fc;
            }
        }
        return undefined;
    }
    addElement(element) {
        if (element instanceof famix_1.Class) {
            this.famixClasses.add(element);
        }
        else {
            this.elements.add(element);
        }
        element.id = this.idCounter;
        this.idCounter++;
    }
    getMSE() {
        let ret = "(";
        for (const element of this.famixClasses) {
            ret = ret + element.getMSE();
        }
        for (const element of this.elements) {
            ret = ret + element.getMSE();
        }
        return ret + ")";
    }
}
exports.FamixRepository = FamixRepository;
//# sourceMappingURL=famix_repository.js.map