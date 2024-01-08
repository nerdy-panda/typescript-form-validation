import Rule from "../Services/Rule.js";
class Min extends Rule {
    constructor(fieldName, min) {
        super(fieldName);
        this.min = min;
    }
    validate(value) {
        const valueLength = value.length;
        return valueLength >= this.min;
    }
    message() {
        return `minimum length for ${this.field} should be ${this.min} character !!! `;
    }
}
export default Min;
//# sourceMappingURL=Min.js.map