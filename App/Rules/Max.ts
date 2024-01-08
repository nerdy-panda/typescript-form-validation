import Rule from "../Services/Rule.js";

class Max extends Rule {
    
    constructor(fieldName:string , public max : number){
        super(fieldName);
    }
    override validate(value: string): boolean {
        const valueLength : number = value.length ; 
        return valueLength<=this.max;
    }
    override message(): string {
        return `maximum length for ${this.field} should be ${this.max} character !!! `;
    }
}

export default Max;