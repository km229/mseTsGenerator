import {FamixElement} from "../model/FamixElement";
import {ContainerEntity} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";
import {ModifierableNode} from "ts-morph";
import {FamixNode} from "../model/FamixNode";

export class ContainerNode extends FamixNode<ModifierableNode, ContainerEntity>{

    constructor(name: string, element: ModifierableNode) {
        super(element, new ContainerEntity(MSEDocument.getFamixRepository()), name, "ContainerEntity");
    }
    execute() {
        this.node.getModifiers().forEach(modifier => {
            this.famixElement.addModifiers(modifier.getText())
        })
    }

    search(name: string, type: string): FamixElement<any> {
        return undefined;
    }

}