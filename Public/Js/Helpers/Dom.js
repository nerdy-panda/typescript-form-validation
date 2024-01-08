import Dom from "../Services/Singletons/Dom.js";
const INSTANCE = Dom.instance();
function hasOkFieldClass(element) {
    return INSTANCE.hasOkFieldClass(element);
}
function addOkFieldClass(element) {
    INSTANCE.addOkFieldClass(element);
}
function addOkFieldClassIfIsNotExists(element) {
    INSTANCE.addOkFieldClassIfIsNotExists(element);
}
function addFailFieldClass(element) {
    INSTANCE.addFailFieldClass(element);
}
function hasFailFieldClass(element) {
    return INSTANCE.hasFailFieldClass(element);
}
function addFailFieldClassIfNotExists(element) {
    INSTANCE.addFailFieldClassIfNotExists(element);
}
function removeFailFieldClass(element) {
    INSTANCE.removeFailFieldClass(element);
}
function removeFailFieldClassIfExists(element) {
    INSTANCE.removeFailFieldClassIfExists(element);
}
function removeOkFieldClass(element) {
    INSTANCE.removeOkFieldClass(element);
}
function removeOkFieldClassIfExists(element) {
    INSTANCE.removeOkFieldClassIfExists(element);
}
function removeFailAndAddOkFieldClass(element) {
    INSTANCE.removeFailAndAddOkFieldClass(element);
}
function removeOkAndAddFailFieldClass(element) {
    INSTANCE.removeOkAndAddFailFieldClass(element);
}
function clearHtml(element) {
    INSTANCE.clearHtml(element);
}
function clearValue(element) {
    INSTANCE.clearValue(element);
}
function clearValues(elements) {
    INSTANCE.clearValues(elements);
}
function printInputValidationErrors(errors, place) {
    INSTANCE.printInputValidationErrors(errors, place);
}
function getFirstNameRow() {
    return INSTANCE.getFirstNameRow();
}
function getFirstNameInput() {
    return INSTANCE.getFirstNameInput();
}
function getFirstNameErrorContainer() {
    return INSTANCE.getFirstNameErrorContainer();
}
function getLastNameRow() {
    return INSTANCE.getLastNameRow();
}
function getLastNameInput() {
    return INSTANCE.getLastNameInput();
}
function getLastNameErrorContainer() {
    return INSTANCE.getLastNameErrorContainer();
}
function getEmailRow() {
    return INSTANCE.getEmailRow();
}
function getEmailInput() {
    return INSTANCE.getEmailInput();
}
function getEmailErrorContainer() {
    return INSTANCE.getEmailErrorContainer();
}
function getUrlRow() {
    return INSTANCE.getUrlRow();
}
function getUrlInput() {
    return INSTANCE.getUrlInput();
}
function getUrlErrorContainer() {
    return INSTANCE.getUrlErrorContainer();
}
function disable(element) {
    INSTANCE.disable(element);
}
function disableIfIsNot(element) {
    INSTANCE.disableIfIsNot(element);
}
function enable(element) {
    INSTANCE.enable(element);
}
function enableIfIsNot(element) {
    INSTANCE.enableIfIsNot(element);
}
function disableByStatusIfIsNot(element, status) {
    INSTANCE.disableByStatusIfIsNot(element, status);
}
export { hasOkFieldClass, addOkFieldClass, addOkFieldClassIfIsNotExists, removeOkFieldClass, removeOkFieldClassIfExists, removeOkAndAddFailFieldClass, addFailFieldClass, hasFailFieldClass, addFailFieldClassIfNotExists, removeFailFieldClass, removeFailFieldClassIfExists, removeFailAndAddOkFieldClass, clearHtml, clearValue, clearValues, printInputValidationErrors, getFirstNameRow, getFirstNameInput, getFirstNameErrorContainer, getLastNameRow, getLastNameInput, getLastNameErrorContainer, getEmailRow, getEmailInput, getEmailErrorContainer, getUrlRow, getUrlInput, getUrlErrorContainer, disable, disableIfIsNot, enable, enableIfIsNot, disableByStatusIfIsNot, };
//# sourceMappingURL=Dom.js.map