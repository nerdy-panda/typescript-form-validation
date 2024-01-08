import {default as Contract} from "../Contracts/Services/Rule.js";

abstract class Rule implements Contract {
    constructor(public field:string){}
    abstract validate(value: string): boolean;
    abstract message(): string;
}

export default Rule;