import {Disableable, Valueable} from "../../Types/Utilities.js";

interface Dom {
    addOkFieldClass(element:HTMLElement):void;
    addOkFieldClassIfIsNotExists(element : HTMLElement):void;
    hasOkFieldClass(element:HTMLElement):boolean;
    removeOkFieldClass(element : HTMLElement):void;
    removeOkFieldClassIfExists(element:HTMLElement):void;
    removeOkAndAddFailFieldClass(element:HTMLElement):void;

    addFailFieldClass(element:HTMLElement):void;
    hasFailFieldClass(element : HTMLElement):boolean;
    addFailFieldClassIfNotExists(element:HTMLElement):void;
    removeFailFieldClass(element:HTMLElement):void;
    removeFailFieldClassIfExists(element:HTMLElement):void;
    removeFailAndAddOkFieldClass(element:HTMLElement):void;

    clearHtml(element:HTMLElement):void;
    clearValue(element:Valueable):void;
    clearValues(elements:Valueable[]):void;
    printInputValidationErrors(errors : string[],place:HTMLElement):void;

    getFirstNameRow():HTMLElement;
    getFirstNameInput():HTMLInputElement;
    getFirstNameErrorContainer():HTMLElement;

    getLastNameRow():HTMLElement;
    getLastNameInput():HTMLInputElement;
    getLastNameErrorContainer():HTMLElement;
    
    getEmailRow():HTMLElement;
    getEmailInput():HTMLInputElement;
    getEmailErrorContainer():HTMLElement;

    getUrlRow():HTMLElement;
    getUrlInput():HTMLInputElement;
    getUrlErrorContainer():HTMLElement;

    disable(element : Disableable):void;
    disableIfIsNot(element:Disableable):void;
    enable(element : Disableable):void;
    enableIfIsNot(element : Disableable):void;

    disableByStatusIfIsNot(element:Disableable , status : boolean ):void;
}
export default Dom ;