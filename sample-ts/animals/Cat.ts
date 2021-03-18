///<reference path='Animal.ts'/>

module MyNamespace {
    export class Cat extends Animal {

        public family:string;

        constructor() {
            super();

            this.furry = true;
            this.domestic = true;
            this.family = "feline";
        }

    }
}