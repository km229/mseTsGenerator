module MyNamespace {
    export class Student implements IWork {

        public averageGrade:number;

        constructor() {
            this.averageGrade = 4.07;
        }

        public work():void {
            console.log("I am studying");
        }

    }
}