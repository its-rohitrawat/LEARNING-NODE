Node.js Modules: CommonJS vs. ES Modules
========================================

Modules allow us to break our code into separate files, making it organized and reusable. There are two main systems used in Node.js: **CommonJS (CJS)** and **ES Modules (ESM)**.

1\. Named Exports vs. Default Exports
-------------------------------------

| **Feature** | **Named Export** | **Default Export** |
| --- | --- | --- |
| **Quantity** | Multiple per file | Only one per file |
| **Import Syntax** | Must use curly braces: `{ }` | No curly braces used |
| **Flexibility** | Name must match exactly | Can be renamed during import |

* * * * *

2\. Implementation Breakdown
----------------------------

### `functions.js` (Named Exports)

Used when you have a library of multiple functions you want to share.

**CommonJS (Older Way):**

JavaScript

```
function greet() { console.log("im greet function"); }
function add(n, m2) { console.log(n + m2); }

module.exports = { greet, add };

```

**ES Module (Modern Way):**

JavaScript

```
export function greet() { console.log("im greet function"); }
export function add(n, m2) { console.log(n + m2); }

```

* * * * *

### `utilities.js` (Default Export)

Used when a file has one main "thing" to export (like a single utility function).

**CommonJS (Older Way):**

JavaScript

```
function minus(a, b) { console.log(a - b); }
module.exports = minus;

```

**ES Module (Modern Way):**

JavaScript

```
function minus(a, b) { console.log(a - b); }
export default minus;

```

* * * * *

### `index.js` (The Entry Point)

This is where we bring everything together.

**CommonJS (Older Way):**

JavaScript

```
const { greet, add } = require("./functions.js");
const substraction = require("./utilities.js");

greet();
add(10, 20);
substraction(90, 33);

```

**ES Module (Modern Way):**

JavaScript

```
import { greet, add } from "./functions.js"; // Named import
import substraction from "./utilities.js";  // Default import

greet();
add(38, 42);
substraction(39234, 3424);

```

* * * * *

3\. Important Setup for ESM
---------------------------

By default, Node.js treats `.js` files as CommonJS. To use the `import/export` syntax (ESM), you must do one of the following:

1.  **package.json:** Add `"type": "module"` to your `package.json` file.

2.  **File Extensions:** Rename your files from `.js` to `.mjs`.

> **Pro Tip:** In ESM, when importing local files, you **must** include the file extension (e.g., `from "./functions.js"`), whereas in CommonJS it was often optional.