import { FAIL_FIELD_CLASS, OK_FIELD_CLASS } from "../Configs/Application.js";
class Dom {
    addOkFieldClass(element) {
        element.classList.add(OK_FIELD_CLASS);
    }
    hasOkFieldClass(element) {
        return element.classList.contains(OK_FIELD_CLASS);
    }
    addOkFieldClassIfIsNotExists(element) {
        if (this.hasOkFieldClass(element))
            return;
        this.addOkFieldClass(element);
    }
    removeOkFieldClass(element) {
        element.classList.remove(OK_FIELD_CLASS);
    }
    removeOkFieldClassIfExists(element) {
        if (this.hasOkFieldClass(element))
            this.removeOkFieldClass(element);
    }
    removeOkAndAddFailFieldClass(element) {
        this.removeOkFieldClassIfExists(element);
        this.addFailFieldClassIfNotExists(element);
    }
    addFailFieldClass(element) {
        element.classList.add(FAIL_FIELD_CLASS);
    }
    hasFailFieldClass(element) {
        return element.classList.contains(FAIL_FIELD_CLASS);
    }
    addFailFieldClassIfNotExists(element) {
        if (!this.hasFailFieldClass(element))
            this.addFailFieldClass(element);
    }
    removeFailFieldClass(element) {
        element.classList.remove(FAIL_FIELD_CLASS);
    }
    removeFailFieldClassIfExists(element) {
        if (!this.hasFailFieldClass(element))
            return;
        this.removeFailFieldClass(element);
    }
    removeFailAndAddOkFieldClass(element) {
        this.removeFailFieldClassIfExists(element);
        this.addOkFieldClassIfIsNotExists(element);
    }
    clearHtml(element) {
        element.innerHTML = '';
    }
    clearValue(element) {
        element.value = '';
    }
    clearValues(elements) {
        for (const element of elements) {
            this.clearValue(element);
        }
    }
    printInputValidationErrors(errors, place) {
        for (const error of errors) {
            const errorElement = window.document.createElement('li');
            errorElement.innerHTML = error;
            place.appendChild(errorElement);
        }
    }
    getFirstNameRow() {
        return window.document.body.querySelector('#first-name-row');
    }
    getFirstNameInput() {
        return window.document.body.querySelector("#first-name-input");
    }
    getFirstNameErrorContainer() {
        return window.document.body.querySelector("#first-name-error-container");
    }
    getLastNameRow() {
        return window.document.body.querySelector("#last-name-row");
    }
    getLastNameInput() {
        return window.document.body.querySelector("#last-name-input");
    }
    getLastNameErrorContainer() {
        return window.document.body.querySelector("#last-name-error-container");
    }
    getEmailRow() {
        return window.document.body.querySelector("#email-row");
    }
    getEmailInput() {
        return window.document.body.querySelector('#email-input');
    }
    getEmailErrorContainer() {
        return window.document.body.querySelector("#email-error-container");
    }
    getUrlRow() {
        return window.document.body.querySelector("#url-row");
    }
    getUrlInput() {
        return window.document.body.querySelector("#url-input");
    }
    getUrlErrorContainer() {
        return window.document.body.querySelector("#url-error-container");
    }
    disable(element) {
        element.disabled = true;
    }
    disableIfIsNot(element) {
        const isDisable = element.disabled;
        if (isDisable)
            return;
        this.disable(element);
    }
    enable(element) {
        element.disabled = false;
    }
    enableIfIsNot(element) {
        const isEnable = !element.disabled;
        if (isEnable)
            return;
        this.enable(element);
    }
    disableByStatusIfIsNot(element, status) {
        if (status)
            this.disableIfIsNot(element);
        else
            this.enableIfIsNot(element);
    }
}
export default Dom;
//# sourceMappingURL=Dom.js.map