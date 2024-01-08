import Rule from "../Services/Rule.js";
import Patterns from "../Services/Patterns.js";
class NameRule extends Rule {
    validate(value) {
        return Patterns.firstName.test(value);
    }
    message() {
        return `${this.field} should be character`;
    }
}
export default NameRule;
//# sourceMappingURL=NameRule.js.map