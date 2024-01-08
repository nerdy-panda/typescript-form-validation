import Rule from "../Services/Rule.js";
import Patterns from "../Services/Patterns.js";

class Url extends Rule {
    override validate(value: string): boolean {
        value = value.trim();
        return Patterns.url.test(value);
    }
    override message(): string {
        return `format for ${this.field} field is not like to URL !!! `;
    }    
}

export default Url;