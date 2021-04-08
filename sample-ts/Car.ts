namespace CarSpace {

    interface Blah {
        test: string

        drive(number, boolean, string)
    }

    class Car implements Blah {
        Engine: string;
        test: string;

        constructor(engine: string) {
            this.Engine = engine;
        }
    
        drive(speed : number, drive : boolean, direction : string){
            if (drive)
                console.log('The car is driving' + direction + "at" + speed)
        }
    }
}