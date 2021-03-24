import {PropertyDeclaration} from "ts-morph"
import {Attribute} from "../lib/pascalerni/model/famix"
import {MSEDocument} from "../MSEDocument";
import {FamixNode} from "../model/FamixNode";
import {IndexedFileAnchorElement} from "../elements/IndexedFileAnchorElement";

export class AttributeNode extends FamixNode<PropertyDeclaration, Attribute> {

    constructor(element: PropertyDeclaration) {
        super(element, new Attribute(MSEDocument.getFamixRepository()), element.getSourceFile().getFilePath()+"#"+element.getName(), element.getType().getText()+'#Attribute');
    }

    setDeclaredType(): void {
        if(!this.node.getType().isAny()){
            // Classes existantes
            let searchedNode = MSEDocument.getProject().search('', `${this.node.getType().getText()}#Class`)
            if(null != searchedNode){
                this.famixElement.setDeclaredType(searchedNode.famixElement)
                return
            }
            // Types primitifs
            searchedNode = MSEDocument.getProject().search(this.node.getType().getText(), `${this.node.getType().getText()}`)
            if(null != searchedNode){
                this.famixElement.setDeclaredType(searchedNode.famixElement)
            }
        }
    }

    execute(): void {

        // Define name
        this.famixElement.setName(this.node.getName())

        // Define declaredType
        this.setDeclaredType()

        this.famixElement.setParentType(this.parentNode.famixElement)

        let index = new IndexedFileAnchorElement(this.node.getSourceFile().getFilePath(), this.famixElement, this.node.getPos(), this.node.getEnd())
        index.execute()
        this.famixElement.setSourceAnchor(index.famixElement)

        this.node.getModifiers().forEach(modifier => {
            if(modifier.getText() == 'static'){
                this.famixElement.setHasClassScope(true)
            }
        })
        super.execute()

    }

}

