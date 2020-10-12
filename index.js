import { checkType, nonEmptyString, numberInRange } from "./modules-package/check.js";
import { validateFiled, validateObject } from "./modules-package/validation.js";
import { dumpErrors } from "./modules-package/errors.js";
import { user } from "./modules-package/scheme.js";
import { userScheme } from "./modules-package/scheme.js";

const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`Everything is ok`);
};