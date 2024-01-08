import Patterns from "../Services/Patterns.js";
import Rule from "../Services/Rule.js";
class Email extends Rule {
    validate(value) {
        value = value.trim();
        return Patterns.email.test(value);
    }
    message() {
        return `${this.field} format is not like to email !!!`;
    }
}
export default Email;
//# sourceMappingURL=Email.js.map