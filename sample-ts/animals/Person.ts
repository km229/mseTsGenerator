module MyNamespace {
    export class Person {

        private _age:number = 1;

        constructor() {

        }

        public get age():number {
            return this._age;
        }

        public set age(val:number) {
            if(this._age > 0) {
                this._age = val;
            }
        }

    }
}