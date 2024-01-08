import Field from "../../Contracts/Services/Field.js";
import {
    clearValues,
    disableByStatusIfIsNot, disableIfIsNot,
    getEmailErrorContainer, getEmailInput, getEmailRow,
    getFirstNameErrorContainer,
    getFirstNameInput,
    getFirstNameRow, getLastNameErrorContainer, getLastNameInput,
    getLastNameRow, getUrlErrorContainer, getUrlInput, getUrlRow,
} from "../../Helpers/Dom.js";
import {NullOrField, NullOrHtmlButton, ValidationResult, ValidationResultArray} from "../../Types/Utilities.js";
import FieldRule from "../../Services/FieldRule.js";
import Validator from "../../Contracts/Services/Validator.js";
import ObjectUtility from "../../Contracts/Services/ObjectUtility.js";

class Application {
    protected registerButton : NullOrHtmlButton = null ;
    protected resetButton : NullOrHtmlButton = null ;
    protected firstNameField : NullOrField = null ;
    protected lastNameField : NullOrField = null ;
    protected emailAddressField : NullOrField = null ;
    protected urlField :NullOrField = null ;
    protected validationResult : ValidationResult = {
        firstName : false ,  lastName : false ,  email : false , url : false ,
    }
    constructor(
        protected validator : Validator , protected objectUtility :ObjectUtility ,
    ){}
    main(){
        this.registerButton = <HTMLButtonElement> window.document.body.querySelector("#register-button");
        this.resetButton = <HTMLButtonElement> window.document.body.querySelector("#reset-button");

        this.registerButton.addEventListener('click',this.registerButtonClickListener);
        this.resetButton.addEventListener('click',this.resetButtonClickListener);
        this.initializeFields();
        this.bindKeyUpEventToFields();
    }
    protected initializeFields():void {
        this.initializeFirstNameField();
        this.initializeLastNameFirst();
        this.initializeEmailAddressField();
        this.initializeUrlField();
    }
    protected bindKeyUpEventToFields():void {
        this.firstNameField?.element.addEventListener('keyup',this.firstNameKeyupListener);
        this.lastNameField?.element.addEventListener('keyup',this.lastNameKeyupListener);
        this.emailAddressField?.element.addEventListener('keyup',this.emailKeyupListener);
        this.urlField?.element.addEventListener('keyup',this.urlKeyupListener);
    }
    protected initializeFirstNameField():void {
        this.firstNameField = {
            row : getFirstNameRow() , element : getFirstNameInput() ,
            errorContainer : getFirstNameErrorContainer() , rules : FieldRule.firstName()
        }
    }
    protected initializeLastNameFirst():void {
        this.lastNameField = {
            row : getLastNameRow() , element : getLastNameInput() ,
            errorContainer : getLastNameErrorContainer() , rules : FieldRule.lastName()
        }
    }
    protected initializeEmailAddressField():void {
        this.emailAddressField = {
            row : getEmailRow() ,
            element : getEmailInput() ,
            errorContainer : getEmailErrorContainer() ,
            rules : FieldRule.email()
        }
    }
    protected initializeUrlField():void {
        this.urlField = {
            row : getUrlRow() ,
            element : getUrlInput() ,
            errorContainer : getUrlErrorContainer()  ,
            rules : FieldRule.url() ,
        }
    }


    protected registerButtonClickListener = (event:MouseEvent) :void => {
        if (this.cantSubmit())
            event.preventDefault();
    }

    protected doValidateFirstName():boolean {
        return this.validator.validateField(<Field> this.firstNameField);
    }
    protected doValidateLastName ():boolean {
        return this.validator.validateField(<Field> this.lastNameField);
    }
    protected doValidateEmail ():boolean {
        return this.validator.validateField(<Field> this.emailAddressField);
    }
    protected doValidateUrl ():boolean {
        return this.validator.validateField(<Field> this.urlField);
    }
    protected validateFields():ValidationResult {
        return {
            firstName : this.doValidateFirstName() ,  lastName : this.doValidateLastName() ,
            email : this.doValidateEmail() , url : this.doValidateUrl() ,
        }
    }
    protected canSubmit():boolean {
        const validationResultArray : ValidationResultArray = <ValidationResultArray> this.objectUtility.toArray(this.validationResult);
        return validationResultArray.indexOf(false) === -1;
    }
    protected cantSubmit():boolean {
        return !this.canSubmit();
    }
    protected disableRegisterButtonIfIsNot():void {
        disableIfIsNot(<HTMLButtonElement>this.registerButton);
    }
    protected disableRegisterButtonByStatus(status : boolean):void {
        disableByStatusIfIsNot(<HTMLButtonElement>this.registerButton,status);
    }
    protected disableRegisterButtonByCantSubmit():void {
        const cantSubmit : boolean = this.cantSubmit();
        this.disableRegisterButtonByStatus(cantSubmit);
    }
    protected firstNameKeyupListener = (event:KeyboardEvent) :void => {
        this.validationResult.firstName = this.doValidateFirstName();
        this.disableRegisterButtonByCantSubmit();
    }
    protected lastNameKeyupListener = (event : KeyboardEvent) :void => {
        this.validationResult.lastName = this.doValidateLastName();
        this.disableRegisterButtonByCantSubmit();
    }
    protected emailKeyupListener = (event : KeyboardEvent) :void => {
        this.validationResult.email = this.doValidateEmail();
        this.disableRegisterButtonByCantSubmit();
    }
    protected urlKeyupListener = (event : KeyboardEvent ) :void => {
        this.validationResult.url = this.doValidateUrl();
        this.disableRegisterButtonByCantSubmit();
    }
    protected reinitializeValidationResult():void {
        this.validationResult = {
            firstName : false , lastName : false , email : false , url : false
        }
    }
    protected resetButtonClickListener = (event:MouseEvent) :void => {
        event.preventDefault();
        const fields : HTMLInputElement[] = [
            <HTMLInputElement> this.firstNameField?.element ,
            <HTMLInputElement> this.lastNameField?.element ,
            <HTMLInputElement> this.emailAddressField?.element ,
            <HTMLInputElement> this.urlField?.element ,
        ];
        clearValues(fields);
        this.disableRegisterButtonIfIsNot();
        this.validationResult = this.validateFields();
    }
}
export default Application;