export class Persona {

    constructor(public name: string, public age: number, public successCreated: boolean = false){
    }

    static createFromJson(json: any): Persona{
        return new Persona(json.name, json.age, json.successCreated);
    }

    saidHi() {
        if (this.successCreated){
            return 'hi my name is ' + this.name;
        }else{
            return 'something fail!';
        }
    }
}
