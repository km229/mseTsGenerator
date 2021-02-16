"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const association_1 = require("./../famix/association");
class Invocation extends association_1.Association {
    constructor() {
        super(...arguments);
        this.invocationCandidates = new Set();
    }
    // manyMany.Getter
    // @FameProperty(name = "candidates", opposite = "incomingInvocations")
    getCandidates() {
        return this.invocationCandidates;
    }
    // manyMany.Setter
    addCandidates(newCandidates) {
        if (!this.invocationCandidates.has(newCandidates)) {
            this.invocationCandidates.add(newCandidates);
            newCandidates.getIncomingInvocations().add(this);
        }
    }
    // oneMany.Getter
    // @FameProperty(name = "receiver", opposite = "receivingInvocations")
    getReceiver() {
        return this.invocationReceiver;
    }
    // oneMany.Setter
    setReceiver(newReceiver) {
        this.invocationReceiver = newReceiver;
        newReceiver.getReceivingInvocations().add(this);
    }
    // oneMany.Getter
    // @FameProperty(name = "sender", opposite = "outgoingInvocations")
    getSender() {
        return this.invocationSender;
    }
    // oneMany.Setter
    setSender(newSender) {
        this.invocationSender = newSender;
        newSender.getOutgoingInvocations().add(this);
    }
    // @FameProperty(name = "signature")
    getSignature() {
        return this.invocationSignature;
    }
    setSignature(invocationSignature) {
        this.invocationSignature = invocationSignature;
    }
    // @FameProperty(name = "receiverSourceCode")
    getReceiverSourceCode() {
        return this.invocationReceiverSourceCode;
    }
    setReceiverSourceCode(invocationReceiverSourceCode) {
        this.invocationReceiverSourceCode = invocationReceiverSourceCode;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Invocation", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("candidates", this.getCandidates());
        exporter.addProperty("receiver", this.getReceiver());
        exporter.addProperty("sender", this.getSender());
        exporter.addProperty("signature", this.getSignature());
        exporter.addProperty("receiverSourceCode", this.getReceiverSourceCode());
    }
}
exports.Invocation = Invocation;
//# sourceMappingURL=invocation.js.map