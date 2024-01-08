import Field from "../Contracts/Services/Field.js";

type NullOrHtmlButton = null | HTMLButtonElement ;
type NullOrField = null | Field ;
type ArrayOfStrings = string[];
type ValidationResult = {firstName : boolean ,  lastName : boolean , email : boolean , url : boolean };
type ValidationResultArray = (ValidationResult[keyof ValidationResult])[];
type Disableable = { disabled : boolean } ;
type Valueable = {value : string };
export {
    NullOrHtmlButton , NullOrField , ArrayOfStrings , ValidationResult , ValidationResultArray ,
    Disableable , Valueable ,
};