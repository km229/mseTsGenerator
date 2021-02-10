import * as def from '../../constants'

export class Element {

    private _id: number
    private _type: string
    private _attrList: [string, any][]

    constructor(id: number, type: string, attr: [string, string][] = []) {
        this._id=id
        this._type=type
        this._attrList=attr
    }

    get id(): number {
        return this._id;
    }

    addAttribute(key: string, value: any): void {
        this._attrList.push([key, value])
    }

    addAttributes(attrs: [string, any][]): void {
        attrs.forEach(attr => {
            this._attrList.push([attr[0], attr[1]])
        })
    }

    toMSE(): string {
        let result = `\t${def.OPEN_TOKEN+def.FAMIX_PREFIX}.${this._type} (id: ${this._id})\n`
        this._attrList.forEach(a => {
            result += `\t\t\t(${a[0]} ${a[1].toString()})\n`
        })
        return result += `\t${def.CLOSE_TOKEN}`
    }

}