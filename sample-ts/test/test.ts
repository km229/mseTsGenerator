
namespace TestSpace {
    import time from './time';

    var TEST = "cc"
    const TEST2 = "cc2"

    class premier extends time {

        constructor(premier: number, sec: number) {
            super(premier, "\'");
            this.sec = new seconde(sec)
            this.sec.valeur = this.convertSeconds()
        }

        private _sec: seconde

        get sec(): seconde {
            return this._sec;
        }

        set sec(value: seconde) {
            this._sec = value;
        }

        convertSeconds(): number {
            if (this.sec.valeur > 60) {
                let min = this.sec.valeur / 60
                this.valeur += Math.round(min)
                this.sec.valeur = this.sec.valeur % 60
            } else {
                return this.sec.valeur
            }
        }

        print(): string {
            return this.valeur + this.text + this._sec.print()
        }
    }

    class seconde extends time {

        constructor(value: number) {
            super(value, "\"");
        }

        print(): string {
            return this.valeur + this.text
        }
    }

    function isPrime(n: number): boolean {
        let prime = true;
        let i = 2;
        while (i < n) {
            if (n % i == 0) {
                prime = false;
            }
            i++;
        }
        return prime;
    }

    function printMinutesAndSecondes(min: number, sec: number): void {
        let val = new premier(min, sec)
        console.log(val.print())
    }

}

TestSpace.printMinutesAndSecondes(2, 90)
