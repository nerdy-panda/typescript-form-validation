import { clearValues, disableByStatusIfIsNot, disableIfIsNot, getEmailErrorContainer, getEmailInput, getEmailRow, getFirstNameErrorContainer, getFirstNameInput, getFirstNameRow, getLastNameErrorContainer, getLastNameInput, getLastNameRow, getUrlErrorContainer, getUrlInput, getUrlRow, } from "../../Helpers/Dom.js";
import FieldRule from "../../Services/FieldRule.js";
class Application {
    constructor(validator, objectUtility) {
        this.validator = validator;
        this.objectUtility = objectUtility;
        this.registerButton = null;
        this.resetButton = null;
        this.firstNameField = null;
        this.lastNameField = null;
        this.emailAddressField = null;
        this.urlField = null;
        this.validationResult = {
            firstName: false, lastName: false, email: false, url: false,
        };
        this.registerButtonClickListener = (event) => {
            if (this.cantSubmit())
                event.preventDefault();
        };
        this.firstNameKeyupListener = (event) => {
            this.validationResult.firstName = this.doValidateFirstName();
            this.disableRegisterButtonByCantSubmit();
        };
        this.lastNameKeyupListener = (event) => {
            this.validationResult.lastName = this.doValidateLastName();
            this.disableRegisterButtonByCantSubmit();
        };
        this.emailKeyupListener = (event) => {
            this.validationResult.email = this.doValidateEmail();
            this.disableRegisterButtonByCantSubmit();
        };
        this.urlKeyupListener = (event) => {
            this.validationResult.url = this.doValidateUrl();
            this.disableRegisterButtonByCantSubmit();
        };
        this.resetButtonClickListener = (event) => {
            var _a, _b, _c, _d;
            event.preventDefault();
            const fields = [
                (_a = this.firstNameField) === null || _a === void 0 ? void 0 : _a.element,
                (_b = this.lastNameField) === null || _b === void 0 ? void 0 : _b.element,
                (_c = this.emailAddressField) === null || _c === void 0 ? void 0 : _c.element,
                (_d = this.urlField) === null || _d === void 0 ? void 0 : _d.element,
            ];
            clearValues(fields);
            this.disableRegisterButtonIfIsNot();
            this.validationResult = this.validateFields();
        };
    }
    main() {
        this.registerButton = window.document.body.querySelector("#register-button");
        this.resetButton = window.document.body.querySelector("#reset-button");
        this.registerButton.addEventListener('click', this.registerButtonClickListener);
        this.resetButton.addEventListener('click', this.resetButtonClickListener);
        this.initializeFields();
        this.bindKeyUpEventToFields();
    }
    initializeFields() {
        this.initializeFirstNameField();
        this.initializeLastNameFirst();
        this.initializeEmailAddressField();
        this.initializeUrlField();
    }
    bindKeyUpEventToFields() {
        var _a, _b, _c, _d;
        (_a = this.firstNameField) === null || _a === void 0 ? void 0 : _a.element.addEventListener('keyup', this.firstNameKeyupListener);
        (_b = this.lastNameField) === null || _b === void 0 ? void 0 : _b.element.addEventListener('keyup', this.lastNameKeyupListener);
        (_c = this.emailAddressField) === null || _c === void 0 ? void 0 : _c.element.addEventListener('keyup', this.emailKeyupListener);
        (_d = this.urlField) === null || _d === void 0 ? void 0 : _d.element.addEventListener('keyup', this.urlKeyupListener);
    }
    initializeFirstNameField() {
        this.firstNameField = {
            row: getFirstNameRow(), element: getFirstNameInput(),
            errorContainer: getFirstNameErrorContainer(), rules: FieldRule.firstName()
        };
    }
    initializeLastNameFirst() {
        this.lastNameField = {
            row: getLastNameRow(), element: getLastNameInput(),
            errorContainer: getLastNameErrorContainer(), rules: FieldRule.lastName()
        };
    }
    initializeEmailAddressField() {
        this.emailAddressField = {
            row: getEmailRow(),
            element: getEmailInput(),
            errorContainer: getEmailErrorContainer(),
            rules: FieldRule.email()
        };
    }
    initializeUrlField() {
        this.urlField = {
            row: getUrlRow(),
            element: getUrlInput(),
            errorContainer: getUrlErrorContainer(),
            rules: FieldRule.url(),
        };
    }
    doValidateFirstName() {
        return this.validator.validateField(this.firstNameField);
    }
    doValidateLastName() {
        return this.validator.validateField(this.lastNameField);
    }
    doValidateEmail() {
        return this.validator.validateField(this.emailAddressField);
    }
    doValidateUrl() {
        return this.validator.validateField(this.urlField);
    }
    validateFields() {
        return {
            firstName: this.doValidateFirstName(), lastName: this.doValidateLastName(),
            email: this.doValidateEmail(), url: this.doValidateUrl(),
        };
    }
    canSubmit() {
        const validationResultArray = this.objectUtility.toArray(this.validationResult);
        return validationResultArray.indexOf(false) === -1;
    }
    cantSubmit() {
        return !this.canSubmit();
    }
    disableRegisterButtonIfIsNot() {
        disableIfIsNot(this.registerButton);
    }
    disableRegisterButtonByStatus(status) {
        disableByStatusIfIsNot(this.registerButton, status);
    }
    disableRegisterButtonByCantSubmit() {
        const cantSubmit = this.cantSubmit();
        this.disableRegisterButtonByStatus(cantSubmit);
    }
    reinitializeValidationResult() {
        this.validationResult = {
            firstName: false, lastName: false, email: false, url: false
        };
    }
}
export default Application;
//# sourceMappingURL=Application.js.map