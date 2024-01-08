import NameRule from "../Rules/NameRule.js";
import Email from "../Rules/Email.js";
import Url from "../Rules/Url.js";
import Max from "../Rules/Max.js";
import Min from "../Rules/Min.js";
import { EmailInput, NameInput, UrlInput } from "../Types/FieldRule.js";

class FieldRule {
    static firstName():NameInput {
        const fieldName : string = "First Name";
        return [
            new NameRule(fieldName) , 
            new Min(fieldName , 3 ) , 
            new Max(fieldName , 32 ) , 
        ];
    }
    static lastName():NameInput {
        const fieldName : string = "Last Name";
        return [
            new NameRule(fieldName) ,
            new Min(fieldName , 3 ) , 
            new Max(fieldName , 32 ) , 
        ];
    }
    static email():EmailInput {
        const fieldName :string = 'Email Address';
        return [
            new Min(fieldName,7) , 
            new Max(fieldName , 64) , 
            new Email(fieldName) ,  
        ];
    }
    static url():UrlInput {
        const fieldName:string = 'Url Address';
        return [
            new Min(fieldName ,3) ,
            new Max(fieldName , 64) ,  
            new Url(fieldName)
        ];
    }
}

export default FieldRule;