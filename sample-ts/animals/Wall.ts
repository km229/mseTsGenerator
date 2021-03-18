import {Brick} from "./Brick";

export class Wall {

    public wallWidth:number;
    public wallHeight:number;

    constructor(w:number, h:number) {
        this.wallWidth = w;
        this.wallHeight = h;
        this.build();
    }

    public build():void {
        for(var i:number = 0; i < this.wallHeight; i++) {
            for(var j:number = 0; j < this.wallWidth; j++) {
                var brick:Brick = new Brick();
            }
        }
    }
}