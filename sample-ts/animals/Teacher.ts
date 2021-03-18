module MyNamespace {
    export class Teacher implements IWork {

        public tenure:boolean;

        constructor() {
            this.tenure = true;
        }

        public work():void {
            console.log("I am teaching");
        }

    }
}