import {FamixMseExporter} from "../../famix_mse_exporter";
import {NamedEntity} from "./named_entity";
import {Association} from "./association";
import {BehaviouralEntity} from "./behavioural_entity";

export declare class Invocation extends Association {
    private invocationCandidates;

    getCandidates(): Set<BehaviouralEntity>;

    addCandidates(newCandidates: BehaviouralEntity): void;

    private invocationReceiver;

    getReceiver(): NamedEntity;

    setReceiver(newReceiver: NamedEntity): void;

    private invocationSender;

    getSender(): BehaviouralEntity;
    setSender(newSender: BehaviouralEntity): void;
    private invocationSignature;
    getSignature(): string;
    setSignature(invocationSignature: string): void;
    private invocationReceiverSourceCode;
    getReceiverSourceCode(): string;
    setReceiverSourceCode(invocationReceiverSourceCode: string): void;
    getMSE(): string;
    addPropertiesToExporter(exporter: FamixMseExporter): void;
}
