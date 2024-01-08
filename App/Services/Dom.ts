import { default as Contract } from "../Contracts/Services/Dom.js";
import {FAIL_FIELD_CLASS, OK_FIELD_CLASS} from "../Configs/Application.js";
import {Disableable, Valueable} from "../Types/Utilities.js";

class Dom implements Contract {
    addOkFieldClass(element:HTMLElement):void {
        element.classList.add(OK_FIELD_CLASS);
    }
    hasOkFieldClass(element: HTMLElement): boolean {
        return element.classList.contains(OK_FIELD_CLASS);
    }
    addOkFieldClassIfIsNotExists(element : HTMLElement):void {
        if (this.hasOkFieldClass(element))
            return ;
        this.addOkFieldClass(element);
    }
    removeOkFieldClass(element: HTMLElement):void {
        element.classList.remove(OK_FIELD_CLASS);
    }
    removeOkFieldClassIfExists(element: HTMLElement) {
        if (this.hasOkFieldClass(element))
            this.removeOkFieldClass(element);
    }
    removeOkAndAddFailFieldClass(element: HTMLElement) {
        this.removeOkFieldClassIfExists(element);
        this.addFailFieldClassIfNotExists(element);
    }

    addFailFieldClass(element: HTMLElement):void {
        element.classList.add(FAIL_FIELD_CLASS);
    }
    hasFailFieldClass(element: HTMLElement): boolean {
        return element.classList.contains(FAIL_FIELD_CLASS);
    }
    addFailFieldClassIfNotExists(element: HTMLElement):void {
        if (!this.hasFailFieldClass(element))
            this.addFailFieldClass(element);
    }
    removeFailFieldClass(element: HTMLElement):void {
        element.classList.remove(FAIL_FIELD_CLASS);
    }
    removeFailFieldClassIfExists(element: HTMLElement) :void {
        if (!this.hasFailFieldClass(element))
            return;
        this.removeFailFieldClass(element);
    }
    removeFailAndAddOkFieldClass(element: HTMLElement) :void {
        this.removeFailFieldClassIfExists(element);
        this.addOkFieldClassIfIsNotExists(element);
    }

    clearHtml(element: HTMLElement):void{
        element.innerHTML = '';
    }
    clearValue(element: Valueable):void {
        element.value = '' ;
    }
    clearValues(elements: Valueable[]):void  {
        for (const element of elements) {
            this.clearValue(element);
        }
    }


    printInputValidationErrors(errors: string[], place: HTMLElement) {
        for (const error of errors) {
            const errorElement = window.document.createElement('li');
            errorElement.innerHTML = error;

            place.appendChild(errorElement);
        }
    }

    getFirstNameRow(): HTMLElement {
        return <HTMLElement> window.document.body.querySelector('#first-name-row');
    }
    getFirstNameInput(): HTMLInputElement {
        return <HTMLInputElement> window.document.body.querySelector("#first-name-input");
    }
    getFirstNameErrorContainer(): HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#first-name-error-container");
    }

    getLastNameRow():HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#last-name-row");
    }
    getLastNameInput():HTMLInputElement {
        return <HTMLInputElement> window.document.body.querySelector("#last-name-input");
    }
    getLastNameErrorContainer():HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#last-name-error-container");
    }

    getEmailRow(): HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#email-row");
    }
    getEmailInput(): HTMLInputElement {
        return <HTMLInputElement> window.document.body.querySelector('#email-input');
    }
    getEmailErrorContainer(): HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#email-error-container");
    }

    getUrlRow(): HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#url-row");
    }
    getUrlInput(): HTMLInputElement {
        return <HTMLInputElement> window.document.body.querySelector("#url-input");
    }
    getUrlErrorContainer(): HTMLElement {
        return <HTMLElement> window.document.body.querySelector("#url-error-container");
    }

    disable(element: Disableable) :void {
        element.disabled = true ;
    }
    disableIfIsNot(element: Disableable) :void {
        const isDisable :boolean = element.disabled;
        if (isDisable)
            return;
        this.disable(element);
    }
    enable(element: Disableable):void {
        element.disabled = false;
    }
    enableIfIsNot(element: Disableable) {
        const isEnable : boolean = !element.disabled;
        if (isEnable)
            return ;
        this.enable(element);
    }
    disableByStatusIfIsNot(element: Disableable, status: boolean) {
        if (status)
            this.disableIfIsNot(element)
        else
            this.enableIfIsNot(element);
    }
}
export default Dom ;