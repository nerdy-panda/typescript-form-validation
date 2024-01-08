import Dom from "../Services/Singletons/Dom.js";
import {Disableable, Valueable} from "../Types/Utilities.js";

const INSTANCE = Dom.instance();

function hasOkFieldClass(element : HTMLElement ):boolean {
    return INSTANCE.hasOkFieldClass(element);
}
function addOkFieldClass(element:HTMLElement):void{
    INSTANCE.addOkFieldClass(element);
}
function addOkFieldClassIfIsNotExists(element : HTMLElement):void {
    INSTANCE.addOkFieldClassIfIsNotExists(element);
}

function addFailFieldClass(element:HTMLElement):void {
    INSTANCE.addFailFieldClass(element);
}
function hasFailFieldClass(element : HTMLElement):boolean {
    return INSTANCE.hasFailFieldClass(element);
}
function  addFailFieldClassIfNotExists(element:HTMLElement):void {
    INSTANCE.addFailFieldClassIfNotExists(element);
}
function removeFailFieldClass(element:HTMLElement):void {
    INSTANCE.removeFailFieldClass(element);
}
function removeFailFieldClassIfExists(element:HTMLElement):void {
    INSTANCE.removeFailFieldClassIfExists(element);
}
function removeOkFieldClass(element : HTMLElement):void {
    INSTANCE.removeOkFieldClass(element);
}
function removeOkFieldClassIfExists(element:HTMLElement):void {
    INSTANCE.removeOkFieldClassIfExists(element);
}
function removeFailAndAddOkFieldClass(element: HTMLElement):void {
    INSTANCE.removeFailAndAddOkFieldClass(element);
}
function removeOkAndAddFailFieldClass(element : HTMLElement):void {
    INSTANCE.removeOkAndAddFailFieldClass(element);
}

function clearHtml(element: HTMLElement):void {
    INSTANCE.clearHtml(element);
}
function clearValue(element : Valueable):void {
    INSTANCE.clearValue(element);
}
function clearValues(elements:Valueable[]):void {
    INSTANCE.clearValues(elements);
}
function printInputValidationErrors(errors:string[],place:HTMLElement):void {
    INSTANCE.printInputValidationErrors(errors,place);
}

function getFirstNameRow():HTMLElement {
    return INSTANCE.getFirstNameRow();
}
function getFirstNameInput():HTMLInputElement {
    return INSTANCE.getFirstNameInput();
}
function getFirstNameErrorContainer():HTMLElement {
    return INSTANCE.getFirstNameErrorContainer();
}

function getLastNameRow():HTMLElement {
    return INSTANCE.getLastNameRow();
}
function getLastNameInput():HTMLInputElement {
    return INSTANCE.getLastNameInput();
}
function getLastNameErrorContainer():HTMLElement {
    return INSTANCE.getLastNameErrorContainer();
}

function getEmailRow():HTMLElement {
    return INSTANCE.getEmailRow();
}
function getEmailInput():HTMLInputElement {
    return INSTANCE.getEmailInput();
}
function getEmailErrorContainer():HTMLElement {
    return INSTANCE.getEmailErrorContainer();
}

function getUrlRow():HTMLElement {
    return INSTANCE.getUrlRow();
}
function getUrlInput():HTMLInputElement {
    return INSTANCE.getUrlInput();
}
function getUrlErrorContainer():HTMLElement {
    return INSTANCE.getUrlErrorContainer();
}

function disable(element : Disableable):void {
    INSTANCE.disable(element);
}
function disableIfIsNot(element : Disableable):void {
    INSTANCE.disableIfIsNot(element);
}
function enable(element : Disableable) :void {
    INSTANCE.enable(element);
}
function enableIfIsNot(element : Disableable ) :void {
    INSTANCE.enableIfIsNot(element);
}
function disableByStatusIfIsNot(element : Disableable , status : boolean ):void {
    INSTANCE.disableByStatusIfIsNot(element,status);
}
export {
    hasOkFieldClass , addOkFieldClass , addOkFieldClassIfIsNotExists ,
    removeOkFieldClass , removeOkFieldClassIfExists , removeOkAndAddFailFieldClass ,

    addFailFieldClass , hasFailFieldClass , addFailFieldClassIfNotExists ,
    removeFailFieldClass , removeFailFieldClassIfExists,
    removeFailAndAddOkFieldClass ,

    clearHtml , clearValue , clearValues , printInputValidationErrors ,

    getFirstNameRow , getFirstNameInput , getFirstNameErrorContainer ,
    getLastNameRow , getLastNameInput , getLastNameErrorContainer ,
    getEmailRow , getEmailInput , getEmailErrorContainer ,
    getUrlRow , getUrlInput , getUrlErrorContainer ,

    disable , disableIfIsNot ,
    enable , enableIfIsNot ,
    disableByStatusIfIsNot ,
};