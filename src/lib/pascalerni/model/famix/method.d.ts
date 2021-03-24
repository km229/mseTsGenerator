import {FamixMseExporter} from "../../famix_mse_exporter";
import {CaughtException} from "./../famix/caught_exception";
import {DeclaredException} from "./../famix/declared_exception";
import {Type} from "./../famix/type";
import {BehaviouralEntity} from "./../famix/behavioural_entity";
import {ThrownException} from "./../famix/thrown_exception";

export declare class Method extends BehaviouralEntity {
    private methodKind;
    getKind(): string;
    setKind(methodKind: string): void;
    private methodThrownExceptions;
    getThrownExceptions(): Set<ThrownException>;
    addThrownExceptions(methodThrownExceptions: ThrownException): void;
    private methodCaughtExceptions;
    getCaughtExceptions(): Set<CaughtException>;
    addCaughtExceptions(methodCaughtExceptions: CaughtException): void;
    private methodHasClassScope;
    getHasClassScope(): boolean;
    setHasClassScope(methodHasClassScope: boolean): void;
    private methodParentType;
    getParentType(): Type;
    setParentType(newParentType: Type): void;
    private methodTimeStamp;
    getTimeStamp(): string;
    setTimeStamp(methodTimeStamp: string): void;
    private methodDeclaredExceptions;
    getDeclaredExceptions(): Set<DeclaredException>;
    addDeclaredExceptions(methodDeclaredExceptions: DeclaredException): void;
    private methodCategory;
    getCategory(): string;
    setCategory(methodCategory: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
