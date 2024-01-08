import Application from "./Application.js";
import Validator from "../../Services/Validator.js";
import ObjectUtility from "../../Services/ObjectUtility.js";
const validator = new Validator();
const objectUtility = new ObjectUtility;
const program = new Application(validator, objectUtility);
program.main();
//# sourceMappingURL=launcher.js.map