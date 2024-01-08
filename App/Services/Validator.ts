import {default as Contract } from "../Contracts/Services/Validator.js";
import Field from "../Contracts/Services/Field.js";
import {ArrayOfStrings} from "../Types/Utilities.js";
import {
    clearHtml,
    printInputValidationErrors,
    removeFailAndAddOkFieldClass,
    removeOkAndAddFailFieldClass
} from "../Helpers/Dom.js";
import Rule from "../Contracts/Services/Rule.js";

class Validator implements Contract {
    validateField(field : Field):boolean {
        const value:string = field.element.value;
        const errors : ArrayOfStrings = this.fieldValidator(value,field.rules);
        const row : HTMLElement = field.row ;
        const errorsContainer :HTMLElement = field.errorContainer ;

        clearHtml(errorsContainer);
        if (errors.length==0){
            removeFailAndAddOkFieldClass(row);
            return true;
        }
        removeOkAndAddFailFieldClass(row);
        printInputValidationErrors(errors,errorsContainer);
        return false;
    }
    protected fieldValidator(value:string , rules:Rule[]):ArrayOfStrings {
        const errors : ArrayOfStrings = [];
        for (const rule of rules)
            if(!rule.validate(value))
                errors.push(rule.message());
        return errors;
    }
}
export default Validator;