import NameRule from "../Rules/NameRule.js";
import Email from "../Rules/Email.js";
import Url from "../Rules/Url.js";
import Max from "../Rules/Max.js";
import Min from "../Rules/Min.js";
class FieldRule {
    static firstName() {
        const fieldName = "First Name";
        return [
            new NameRule(fieldName),
            new Min(fieldName, 3),
            new Max(fieldName, 32),
        ];
    }
    static lastName() {
        const fieldName = "Last Name";
        return [
            new NameRule(fieldName),
            new Min(fieldName, 3),
            new Max(fieldName, 32),
        ];
    }
    static email() {
        const fieldName = 'Email Address';
        return [
            new Min(fieldName, 7),
            new Max(fieldName, 64),
            new Email(fieldName),
        ];
    }
    static url() {
        const fieldName = 'Url Address';
        return [
            new Min(fieldName, 3),
            new Max(fieldName, 64),
            new Url(fieldName)
        ];
    }
}
export default FieldRule;
//# sourceMappingURL=FieldRule.js.map