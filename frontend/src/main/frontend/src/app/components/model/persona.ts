export class Persona {

    constructor(public name: string, public age: number){
    }

    static createFromJson(json: any): Persona{
        return new Persona(json.name, json.age);
    }

    saidHi() {
        return 'hi my name is ' + this.name;
    }
}
