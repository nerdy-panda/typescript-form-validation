import Patterns from "../Services/Patterns.js";
import Rule from "../Services/Rule.js";

class Email extends Rule {

    override validate(value: string): boolean {
        value = value.trim();
        return Patterns.email.test(value) ;
    }
    override message(): string {
        return `${this.field} format is not like to email !!!`;
    }
}

export default Email;