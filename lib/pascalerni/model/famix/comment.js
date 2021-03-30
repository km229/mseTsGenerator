"use strict";
// automatically generated code, please do not change
Object.defineProperty(exports, "__esModule", { value: true });
const famix_mse_exporter_1 = require("../../famix_mse_exporter");
const sourced_entity_1 = require("./sourced_entity");
class Comment extends sourced_entity_1.SourcedEntity {
    // oneMany.Getter
    // @FameProperty(name = "container", opposite = "comments")
    getContainer() {
        return this.commentContainer;
    }
    // oneMany.Setter
    setContainer(newContainer) {
        this.commentContainer = newContainer;
        newContainer.getComments().add(this);
    }
    // @FameProperty(name = "content")
    getContent() {
        return this.commentContent;
    }
    setContent(commentContent) {
        this.commentContent = commentContent;
    }
    getMSE() {
        const mse = new famix_mse_exporter_1.FamixMseExporter("FAMIX.Comment", this);
        this.addPropertiesToExporter(mse);
        return mse.getMSE();
    }
    addPropertiesToExporter(exporter) {
        super.addPropertiesToExporter(exporter);
        exporter.addProperty("container", this.getContainer());
        exporter.addProperty("content", this.getContent());
    }
}
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map