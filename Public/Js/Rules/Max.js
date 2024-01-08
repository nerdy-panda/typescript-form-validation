import Rule from "../Services/Rule.js";
class Max extends Rule {
    constructor(fieldName, max) {
        super(fieldName);
        this.max = max;
    }
    validate(value) {
        const valueLength = value.length;
        return valueLength <= this.max;
    }
    message() {
        return `maximum length for ${this.field} should be ${this.max} character !!! `;
    }
}
export default Max;
//# sourceMappingURL=Max.js.map