import NameRule from "../Rules/NameRule.js";
import Email from "../Rules/Email.js";
import Url from "../Rules/Url.js";
import Min from "../Rules/Min.js";
import Max from "../Rules/Max.js";

type NameInput = [ NameRule , Min , Max ];
type EmailInput = [Min , Max , Email ];
type UrlInput = [Min , Max , Url ];
export { NameInput, EmailInput , UrlInput };