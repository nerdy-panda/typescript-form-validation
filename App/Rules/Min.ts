import Rule from "../Services/Rule.js";

class Min extends Rule {
    
    constructor(fieldName:string , public min : number){
        super(fieldName);
    }
    override validate(value: string): boolean {
        const valueLength : number = value.length ; 
        return valueLength>=this.min;
    }
    override message(): string {
        return `minimum length for ${this.field} should be ${this.min} character !!! `;
    }
}

export default Min;