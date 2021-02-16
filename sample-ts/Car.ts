
class testNode extends Node {

}

class Car implements Blah {
    Engine: string;
    test: string;

    constructor(engine: string) {
        this.Engine = engine;
    }
}

class AnotherCar extends Car {
    Color: string;

    constructor(engine: string, color: string) {
        super(engine)
        this.Color = color
    }

    testMethod (speed : number){
        return speed;
    }
}

interface Blah {
    test: string
}