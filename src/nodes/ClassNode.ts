import {ClassDeclaration} from "ts-morph"
import {Class} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument"
import {FamixNode} from "../model/FamixNode"
import {AttributeNode} from "./AttributeNode"
import {ContainerNode} from "../elements/ContainerNode";
import {InheritanceElement} from "../elements/InheritanceElement";
import {ConstructorNode, MethodNode} from "./";

export class ClassNode extends FamixNode<ClassDeclaration, Class> {

    constructor(element: ClassDeclaration) {
        super(element, new Class(MSEDocument.getFamixRepository()), element.getSourceFile().getFilePath()+"#"+element.getName(), element.getName()+"#Class");
        let container = new ContainerNode(element.getName(), this.node)
        container.execute()
        this.famixElement.setContainer(container.famixElement)
    }

    execute(): void {

        this.famixElement.setName(this.node.getName())

        this.node.getProperties().forEach(attribute => {
            let attrElement = new AttributeNode(attribute)
            attrElement.parentNode=this
            this.add(attrElement)
        })

        this.node.getMethods().forEach(node => {
            let attrElement = new MethodNode(node)
            attrElement.parentNode=this
            this.add(attrElement)
        })
        this.node.getConstructors().forEach(node => {
            let attrElement = new ConstructorNode(node)
            attrElement.parentNode=this
            this.add(attrElement)
        })

        let extend
        this.node.getExtends() != undefined ? extend = this.node.getExtends().getText() : extend = undefined

        let searched = MSEDocument.getProject().search(extend, `${extend}#Class`) as FamixNode<ClassDeclaration, Class>
        if (undefined !== extend) {
            if (searched) {
                this.add(new InheritanceElement(this, searched))
            } else {
                //TODO - Search class not added
            }
        }

        this.node.getImplements().forEach(implement => {
            this.famixElement.setIsInterface(true)
            //TODO - Interface
            // let interface = new InterfaceNode(node)
            // interface.parentNode=this
            // this.add(interface)
        })

        super.execute()
    }
}
