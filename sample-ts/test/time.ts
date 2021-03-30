export default abstract class time {

    protected constructor(value: number, txt: string) {
        this._valeur = value
        this._text = txt
        this.testModule()
        this.print()
    }

    private _valeur: number

    get valeur(): number {
        return this._valeur;
    }

    set valeur(value: number) {
        this._valeur = value;
    }

    private _text: string

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    testModule(): void {

    }

    abstract print(): string;

}