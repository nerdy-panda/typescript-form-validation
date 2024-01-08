import Field from "./Field.js";
import Rule from "./Rule.js";
import {ArrayOfStrings} from "../../Types/Utilities.js";

interface Validator {
    validateField(field : Field):boolean;
}
export default Validator;