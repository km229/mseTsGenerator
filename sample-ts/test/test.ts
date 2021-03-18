
class premier {
    text: string
    constructor(phrase: string) {
        this.text=phrase
    }
}

class seconde {

}

export abstract class test extends premier {
    run: boolean
    second: seconde

    protected constructor(test: boolean, phrase: string, sec: seconde) {
        super(phrase)
        this.run=test
        this.second=sec
        this.testModule()
    }

    testModule(): void {
        let new_value =  new seconde()
        this.second = new_value
    }
}

