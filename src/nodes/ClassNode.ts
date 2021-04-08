import * as type from "../types"
import {ClassDeclaration} from "ts-morph"
import {Class} from "../../lib/pascalerni/model/famix"
import {MSEDocument} from "../model/MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {AttributeNode, ConstructorNode, MethodNode} from "../nodes"
import {InheritanceElement} from "../elements"

export class ClassNode extends FamixNode<ClassDeclaration, Class> {

    constructor(element: ClassDeclaration) {
        super(element, new Class(MSEDocument.getFamixRepository()),
            element.getSourceFile().getBaseName() + "#" + element.getName(), type.CLASS);
        ClassNode.components.push(this)
    }

    findNodes() {
        // Recherche des attributs
        this.node.getProperties().forEach(attribute => {
            let attrElement = new AttributeNode(attribute)
            attrElement.parentNode = this
            attrElement.sourceFileNode = this.sourceFileNode
            this.addNode(attrElement)
        })
        // Recherche des méthodes
        this.node.getMethods().forEach(node => {
            let attrElement = new MethodNode(node)
            attrElement.parentNode = this
            attrElement.sourceFileNode = this.sourceFileNode
            this.addNode(attrElement)
        })
        // Recherche des constructeurs
        this.node.getConstructors().forEach(node => {
            let attrElement = new ConstructorNode(node)
            attrElement.parentNode = this
            attrElement.sourceFileNode = this.sourceFileNode
            this.addNode(attrElement)
        })

        // Recherche au sein des noeuds enfants
        super.findNodes()
    }

    execute(): void {
        // Définition du nom
        let name = this.node.getName() == undefined ? this.node.getSourceFile().getBaseName() : this.node.getName()
        this.famixElement.setName(name.replace(/'/g, "\""))

        // Définition des modifiers
        this.node.getModifiers().forEach(modifier => {
            this.famixElement.addModifiers(modifier.getText())
        })

        // Définition du type de classe (src / test)
        if (undefined !== this.sourceFileNode.id && this.sourceFileNode.id.indexOf(".test.ts") !== -1) {
            this.famixElement.setIsTestCase(true)
        } else {
            this.famixElement.setIsTestCase(false)
        }

        // Définition de l'héritage
        let extend
        this.node.getExtends() != undefined ? extend = this.node.getExtends().getText() : extend = undefined
        if (undefined !== extend) {
            let searched = MSEDocument.getProject().search("#" + extend, type.CLASS) as FamixNode<ClassDeclaration, Class>
            if (searched) {
                this.addNode(new InheritanceElement(this, searched))
            }
        }

        // Définition de l'implémentation
        this.node.getImplements().forEach(implement => {
            let searched = MSEDocument.getProject().search("#" + implement.getText(), type.INTERFACE) as FamixNode<ClassDeclaration, Class>
            if (searched) {
                this.addNode(new InheritanceElement(this, searched))
            }
        })

        // Définition des descendants
        super.execute()
    }
}
