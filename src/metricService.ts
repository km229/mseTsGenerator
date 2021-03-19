import {SyntaxKind} from 'ts-morph';
import {isFunctionWithBody} from 'tsutils';
import {createSourceFile, forEachChild, ScriptTarget} from 'typescript';


const increasesComplexity = (node) => {
    /* eslint-disable indent */
    switch (node.kind) {
        case SyntaxKind.CaseClause:
            return (node).statements.length > 0;
        case SyntaxKind.CatchClause:
        case SyntaxKind.ConditionalExpression:
        case SyntaxKind.DoStatement:
        case SyntaxKind.ForStatement:
        case SyntaxKind.ForInStatement:
        case SyntaxKind.ForOfStatement:
        case SyntaxKind.IfStatement:
        case SyntaxKind.WhileStatement:
            return true;

        case SyntaxKind.BinaryExpression:
            switch ((node).operatorToken.kind) {
                case SyntaxKind.BarBarToken:
                case SyntaxKind.AmpersandAmpersandToken:
                    return true;
                default:
                    return false;
            }

        default:
            return false;
    }
    /* eslint-enable indent */
};

export class MetricService {
    private static _instance: MetricService

    static getMetricService(): MetricService {
        if (!MetricService._instance) {
            MetricService._instance = new MetricService()
        }
        return MetricService._instance
    }

    public getCyclomaticComplexity(node): number {
        let temp_file = createSourceFile("temp.ts", node.getText(), ScriptTarget.ES2020);
        return this.getCC(temp_file)
    }

    private getCC(sf): number {
        let complexity = 1
        forEachChild(sf, function cb(node) {
            if (isFunctionWithBody(node)) {
                forEachChild(node, cb);
            } else {
                if (increasesComplexity(node)) {
                    complexity += 1;
                }
                forEachChild(node, cb);
            }
        });
        return complexity
    }

}