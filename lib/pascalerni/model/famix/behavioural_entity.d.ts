import {FamixMseExporter} from "../../famix_mse_exporter";
import {Type} from "./type";
import {ImplicitVariable} from "./implicit_variable";
import {Invocation} from "./invocation";
import {ContainerEntity} from "./container_entity";
import {Reference} from "./reference";
import {LocalVariable} from "./local_variable";
import {Access} from "./access";
import {Parameter} from "./parameter";

export declare class BehaviouralEntity extends ContainerEntity {
    private behaviouralEntitySignature;

    getSignature(): string;

    setSignature(behaviouralEntitySignature: string): void;

    private behaviouralEntityNumberOfParameters;

    getNumberOfParameters(): number;

    setNumberOfParameters(behaviouralEntityNumberOfParameters: number): void;

    private behaviouralEntityDeclaredType;

    getDeclaredType(): Type;
    setDeclaredType(newDeclaredType: Type): void;
    private behaviouralEntityCyclomaticComplexity;
    getCyclomaticComplexity(): number;
    setCyclomaticComplexity(behaviouralEntityCyclomaticComplexity: number): void;
    private behaviouralEntityNumberOfComments;
    getNumberOfComments(): number;
    setNumberOfComments(behaviouralEntityNumberOfComments: number): void;
    private behaviouralEntityImplicitVariables;
    getImplicitVariables(): Set<ImplicitVariable>;
    addImplicitVariables(behaviouralEntityImplicitVariables: ImplicitVariable): void;
    private behaviouralEntityLocalVariables;
    getLocalVariables(): Set<LocalVariable>;
    addLocalVariables(behaviouralEntityLocalVariables: LocalVariable): void;
    private behaviouralEntityNumberOfStatements;
    getNumberOfStatements(): number;
    setNumberOfStatements(behaviouralEntityNumberOfStatements: number): void;
    private behaviouralEntityOutgoingReferences;
    getOutgoingReferences(): Set<Reference>;
    addOutgoingReferences(behaviouralEntityOutgoingReferences: Reference): void;
    private behaviouralEntityNumberOfLinesOfCode;
    getNumberOfLinesOfCode(): number;
    setNumberOfLinesOfCode(behaviouralEntityNumberOfLinesOfCode: number): void;
    private behaviouralEntityOutgoingInvocations;
    getOutgoingInvocations(): Set<Invocation>;
    addOutgoingInvocations(behaviouralEntityOutgoingInvocations: Invocation): void;
    private behaviouralEntityIncomingInvocations;
    getIncomingInvocations(): Set<Invocation>;
    addIncomingInvocations(newIncomingInvocations: Invocation): void;
    private behaviouralEntityNumberOfConditionals;
    getNumberOfConditionals(): number;
    setNumberOfConditionals(behaviouralEntityNumberOfConditionals: number): void;
    private behaviouralEntityAccesses;
    getAccesses(): Set<Access>;
    addAccesses(behaviouralEntityAccesses: Access): void;
    private behaviouralEntityParameters;
    getParameters(): Set<Parameter>;
    addParameters(behaviouralEntityParameters: Parameter): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
