import Rule from "../Services/Rule.js";
import Patterns from "../Services/Patterns.js";

class NameRule extends Rule {
    override validate(value: string): boolean {
        return Patterns.firstName.test(value);
    }
    override message(): string {
        return `${this.field} should be character`;
    }
}
export default NameRule;