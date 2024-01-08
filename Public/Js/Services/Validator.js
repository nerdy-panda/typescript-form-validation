import { clearHtml, printInputValidationErrors, removeFailAndAddOkFieldClass, removeOkAndAddFailFieldClass } from "../Helpers/Dom.js";
class Validator {
    validateField(field) {
        const value = field.element.value;
        const errors = this.fieldValidator(value, field.rules);
        const row = field.row;
        const errorsContainer = field.errorContainer;
        clearHtml(errorsContainer);
        if (errors.length == 0) {
            removeFailAndAddOkFieldClass(row);
            return true;
        }
        removeOkAndAddFailFieldClass(row);
        printInputValidationErrors(errors, errorsContainer);
        return false;
    }
    fieldValidator(value, rules) {
        const errors = [];
        for (const rule of rules)
            if (!rule.validate(value))
                errors.push(rule.message());
        return errors;
    }
}
export default Validator;
//# sourceMappingURL=Validator.js.map