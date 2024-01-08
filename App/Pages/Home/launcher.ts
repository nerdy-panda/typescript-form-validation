import Application from "./Application.js";
import {default as ValidatorContract } from "../../Contracts/Services/Validator.js";
import Validator from "../../Services/Validator.js";
import { default as ObjectUtilityContract } from "../../Contracts/Services/ObjectUtility.js";
import ObjectUtility from "../../Services/ObjectUtility.js";

const validator : ValidatorContract = new Validator();
const objectUtility : ObjectUtilityContract = new ObjectUtility;

const program = new Application(validator,objectUtility);
program.main();