📂 Node.js Built-in Modules: File System (`fs`)
===============================================

These notes cover the **File System (`fs`) core module** in Node.js, which allows you to work with files such as creating, reading, updating, and deleting them.

* * * * *

1\. What is the `fs` Module?
----------------------------

The `fs` (File System) module is a **built-in Node.js module** used to interact with the file system.

It allows you to:

-   Create files
-   Read files
-   Update files
-   Delete files

* * * * *

2\. Importing the Module
------------------------

import { log } from "node:console";\
import fs from "node:fs";

### Key Takeaways:

-   `fs` is a **core module**, so no installation required
-   `node:` prefix is the modern recommended way
-   `log` is imported from `console` for cleaner logging

* * * * *

3\. Synchronous File Operations
-------------------------------

Synchronous methods execute **line-by-line (blocking execution)**.

* * * * *

4\. Creating a File (`writeFileSync`)
-------------------------------------

fs.writeFileSync("path", data);

### Example:

log(1);

let val = fs.writeFileSync("./demo.txt", "file created sync way");

if (val === undefined) {\
  log("file created");\
}

log(2);

### Key Takeaways:

-   Creates a file if it doesn't exist
-   Overwrites file if it already exists
-   Returns `undefined` on success
-   Blocking operation

* * * * *

5\. Writing Another File
------------------------

fs.writeFileSync("./module.txt", "shutup!!");

* * * * *

6\. Reading a File (`readFileSync`)
-----------------------------------

let val = fs.readFileSync("./demo.txt", "utf-8");\
log(val);

### Key Takeaways:

-   Reads file content
-   Must provide encoding (`utf-8`) to get readable text
-   Without encoding → returns buffer

* * * * *

7\. Updating a File (`appendFileSync`)
--------------------------------------

fs.appendFileSync("./module.txt", " \nbye byeee");

### Key Takeaways:

-   Adds data to existing file
-   Does not overwrite existing content
-   `\n` is used for new line

* * * * *

8\. Deleting a File (`unlinkSync`)
----------------------------------

fs.unlinkSync("./demo.txt");

### Key Takeaways:

-   Deletes the specified file
-   Throws error if file does not exist

* * * * *

9\. Execution Flow (Synchronous)
--------------------------------

Example:

log(1);\
fs.writeFileSync("./demo.txt", "data");\
log(2);

### Output:

1\
file created\
2

✔ Code runs **in order**\
✔ Next line waits until previous completes

* * * * *

10\. Synchronous vs Asynchronous (Important Concept)
----------------------------------------------------

| Feature | Synchronous (`Sync`) | Asynchronous |
| --- | --- | --- |
| Execution | Blocking | Non-blocking |
| Performance | Slower | Faster |
| Use Case | Simple scripts | Real apps |

* * * * *

11\. Common Mistakes
--------------------

❌ Forgetting file path (`./demo.txt`)\
❌ Not adding encoding while reading\
❌ Using sync methods in production apps\
❌ Trying to delete non-existing file

* * * * *

12\. Why `fs` Module is Important
---------------------------------

-   Used in backend development
-   Helps manage files dynamically
-   Required for:
    -   Logging systems
    -   File uploads
    -   Data storage
    -   Configuration handling