//! COMMON JS WAY - OLD WAY

// const {greet, add} = require("./functions.js");
// const substraction = require("./utilities.js")

// greet();
// add(10,20);

// substraction(90,33);



//! ES MODULE WAY (RECOMMENDED WAY)

import {greet, add} from "./functions.js"
import substraction from "./utilities.js"

greet()
add(38,42)
substraction(39234,3424)