import Rule from "../Services/Rule.js";
import Patterns from "../Services/Patterns.js";
class Url extends Rule {
    validate(value) {
        value = value.trim();
        return Patterns.url.test(value);
    }
    message() {
        return `format for ${this.field} field is not like to URL !!! `;
    }
}
export default Url;
//# sourceMappingURL=Url.js.map