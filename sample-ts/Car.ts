
interface Blah {
}

class Car implements Blah {
    Engine: string;
    test: string;

    constructor(engine: string) {
        this.Engine = engine;
    }
  
function drive(speed : number, drive : boolean, direction : string){
    console.log('The car is driving');
}