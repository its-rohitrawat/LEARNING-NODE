## 🔄 Import & Export Methods

Node.js historically used CommonJS, but modern JavaScript uses ES Modules. 

### 📌 1. CommonJS (The Old Way)
This uses the `require()` function.
```js
const fs = require("fs");
```

### 📌 2. ES Modules (The Modern Way)
This uses `import` and `export` keywords. 
```js
import fs from "fs";
```
> ✅ **Recommended:** ES Modules are the modern standard. *Note: To use ES Modules in Node.js, you must add `"type": "module"` to your `package.json` file.*

---

## ⚙️ JavaScript Execution Types

To understand the `fs` module, you must understand how Node.js reads code.

* **Synchronous (Sync):** Executes **line by line**. The program stops and waits for the current operation to finish before moving to the next line. This is called "blocking" code.
* **Asynchronous (Async):** Executes in the background. Node.js initiates the task and immediately moves to the next line of code. When the background task finishes, Node.js goes back to handle the result. This is "non-blocking."

---

## 📁 File System (`fs`) Module

The `fs` module is used to perform **CRUD operations** (Create, Read, Update, Delete) on files and directories.

### 🔹 1. Synchronous File Operations
> ⚠️ **Warning:** Sync methods block the execution thread. If a file takes 3 seconds to read, your entire server freezes for 3 seconds. Use these only for simple scripts or during server startup, **never** in routes handling user requests.

#### 📝 Create / Write File
```js
import fs from "fs";

// Creates 'demo.txt' or overwrites it if it already exists
fs.writeFileSync("./demo.txt", "Hello World");
```

#### 📖 Read File
```js
const data = fs.readFileSync("./demo.txt", "utf-8");
console.log(data);
```
**🧠 Why do we need `"utf-8"`?**
Computers store files in raw binary (0s and 1s), which Node reads as a `Buffer`. Passing the `"utf-8"` encoding argument tells Node to translate that binary buffer back into human-readable text. Without it, `console.log(data)` would print something like `<Buffer 48 65 6c 6c 6f... >`.

#### ➕ Append (Update File)
Adds new text to the end of an existing file without deleting what is already there.
```js
fs.appendFileSync("./demo.txt", "\nThis is a new line");
```

#### ❌ Delete File
```js
fs.unlinkSync("./demo.txt");
```


# 📘 Node.js Streams, Buffers & Chunks – Professional Notes



## 🧠 Why Do We Need Streams?

In Node.js, a common way to read files is:

```js
fs.readFile("file.txt", (err, data) => {
  console.log(data);
});
```

### ⚠️ Problem with This Approach

* The **entire file is loaded into memory at once**
* For large files:

  * High memory consumption
  * Slower performance
  * Risk of application crash

---

## ✅ What are Streams?

> **Streams allow processing data piece-by-piece instead of loading it all at once.**

### 💡 Concept

Instead of:

> Load → Process → Output

We use:

> Read → Process → Write (in chunks)

---

### 🔍 Real-Life Analogy

Think of **streams like a water pipe**:

* ❌ Not like a bucket (all water at once)
* ✅ Like a pipe (continuous flow of small amounts)

---

## 🔹 Types of Streams in Node.js

### 1. **Readable Stream**

* Used to **read data**
* Example:

```js
fs.createReadStream("file.txt","utf-8");
```

---

### 2. **Writable Stream**

* Used to **write data**
* Example:

```js
fs.createWriteStream("file.txt");
```

---

### 3. **Duplex Stream**

* Can **read and write both**
* Example:
* Network sockets

```js
let src = fs.createReadStream("file.txt","utf-8");
let destn = fs.createWriteStream("file.txt");
src.pipe(destn);
```

---

### 4. **Transform Stream**

* A special type of duplex stream
* **Modifies data while passing through**
* Example:
* Compression (zlib), encryption

---

## 🚀 The Most Important Method: `pipe()`

```js
import fs from "fs";

const src = fs.createReadStream("input.txt","utf-8");
const dest = fs.createWriteStream("output.txt");

src.pipe(dest);
```

---

### 🧠 How `pipe()` Works

1. Reads data from source (Readable stream)
2. Breaks it into chunks
3. Sends chunks to destination (Writable stream)
4. Automatically manages flow control

---

### ✅ Advantages of `pipe()`

* Minimal code
* Efficient data transfer
* Handles backpressure automatically
* Memory efficient

---

## 🔍 What are Chunks?

> **Chunks are small pieces of data processed by streams.**

When reading a file:

* It is divided into **multiple smaller parts**
* Each part is processed sequentially

---

### 🧪 Example

```js
const fs = require("fs");

const stream = fs.createReadStream("file.txt", {
  encoding: "utf-8",
  highWaterMark: 1,
});

stream.on("data", (chunk) => {
  console.log(chunk);
});
```

---

### 🧠 Explanation

* `highWaterMark: 1` → 1 byte per chunk
* File is split into individual characters

---

### 📌 Example Output

If file content is:

```
HELLO
```

Output:

```
H
E
L
L
O
```

---

## 📏 Default Chunk Size (`highWaterMark`)

| Stream Type         | Default Size |
| ------------------- | ------------ |
| File Streams (`fs`) | 64 KB        |
| Generic Streams     | 16 KB        |

---

## 🧱 What is a Buffer?

> **Buffer is a temporary memory area used to store binary data.**

---

### 🧠 Key Characteristics

* Stores data in **binary format (0s and 1s)**
* Represented in **hexadecimal format**
* Used internally by streams

---

### 🧪 Example

```js
const buffer = Buffer.from("Hello");
console.log(buffer);
```

Output:

```
<Buffer 48 65 6c 6c 6f>
```

---

## 🔄 Flow of Data in Streams

1. File is opened
2. Data is divided into chunks
3. Each chunk is stored in a buffer
4. Chunk is processed or transferred
5. Process repeats until complete

---

## ⚙️ Understanding `highWaterMark`

> **`highWaterMark` defines the maximum size of data (in bytes) a stream can hold in its internal buffer before stopping further reads.**

---

### 🧠 Important Clarification

* It does **NOT strictly define chunk size**
* It defines:

  > **Buffer threshold for flow control**

---

### 🔍 Behavior

* Buffer < highWaterMark → continue reading
* Buffer ≥ highWaterMark → pause reading

---

## 🎯 One-Line Definitions

* **Stream** → Processes data in chunks
* **Chunk** → A small piece of data
* **Buffer** → Temporary memory storing binary data
* **pipe()** → Connects readable stream to writable stream
* **highWaterMark** → Buffer size threshold

---

## 💡 Interview Questions & Answers

### 1. What is a stream in Node.js?

A stream is a method to process data in smaller chunks instead of loading the entire data into memory.

---

### 2. Difference between `readFile` and `createReadStream`?

| readFile               | createReadStream    |
| ---------------------- | ------------------- |
| Loads full file        | Reads in chunks     |
| High memory usage      | Memory efficient    |
| Slower for large files | Faster and scalable |

---

### 3. What is `pipe()`?

A method used to transfer data from a readable stream to a writable stream efficiently.

---

### 4. What is Buffer?

A temporary memory structure used to store binary data.

---

### 5. What is `highWaterMark`?

It defines the maximum buffer size before the stream pauses reading data.

---

## 🧑‍🏫 Summary

* Streams enable efficient data handling 🚀
* Ideal for large files and real-time data processing
* Work using chunks instead of full data loading
* Buffers store intermediate binary data
* `pipe()` simplifies stream handling

---

## 🔥 Best Practice

> Use **Streams + pipe()** whenever working with large files or continuous data processing.

---

## 📌 Final Insight

Streams are a **core concept in Node.js** and are heavily used in:

* File handling
* Network communication
* API data transfer
* Video/audio streaming

# Creating an HTTP Server in Node.js

Node.js has a built-in module called `http` that allows Node to transfer data over the Hyper Text Transfer Protocol (HTTP). This module is fundamental for creating web servers that can listen for requests from clients (like web browsers) and send back responses.

Here is the step-by-step breakdown of how to build and run a basic HTTP server.

## Step 1: Import the `http` Module

To use the HTTP interfaces in Node.js, you must first import the module.

```javascript
import http from "node:http";
```

* **The `node:` prefix:** While you can just write `"http"`, using `"node:http"` is a modern Node.js best practice. It explicitly tells the runtime that you are importing a core built-in module, which slightly improves performance and prevents conflicts if you accidentally install an NPM package with the same name.

## Step 2: Use `createServer()`

The `http.createServer()` method creates an HTTP Server object. It takes a callback function as an argument, which is executed every time a client tries to access the server.

```javascript
let server = http.createServer((req, res) => {
    // Server logic goes here
});
```

This callback function automatically receives two crucial objects:

### 1. The Request Object (`req`)
This object represents the incoming HTTP request from the client. It mostly contains **properties** that tell you what the client is asking for.
* **Common uses:** Checking the URL the user visited (`req.url`), the HTTP method used like GET or POST (`req.method`), or accessing data sent in headers, query parameters, or the request body.

### 2. The Response Object (`res`)
This object represents the outgoing HTTP response. It mostly contains **methods** used to send data back to the client.

#### Sending Data
* `res.write("Hello")`: Sends a chunk of the response body. You can call this multiple times to send data in pieces.
* `res.end()`: **Crucial.** This signals to the server that all response headers and body chunks have been sent. You *must* call `res.end()` on every request, otherwise, the client's browser will just keep spinning and eventually time out. You can also send data directly inside it, like `res.end("Final message")`.

#### Setting Headers and Status Codes
Headers provide metadata about the response (e.g., telling the browser what type of data to expect).

* **Individual setting:**
    ```javascript
    res.setHeader("Custom-Key", "Value");
    res.statusCode = 200; // 200 means "OK"
    ```
* **Combined setting (Recommended):**
    ```javascript
    res.writeHead(200, { "Content-Type": "text/plain" });
    ```
    * `Content-Type` is very important. It tells the browser how to render the data.
    * `text/plain`: Renders as plain text.
    * `text/html`: Renders as a webpage.
    * `application/json`: Renders as JSON data (commonly used for APIs).

## Step 3: Listen on a Port

Once the server is created, it needs to be assigned a specific "door" (port) on your computer to listen for incoming traffic.

```javascript
server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running on port 9000");
});
```
* **`9000`**: The port number. Ports like 3000, 5000, 8000, and 9000 are commonly used for local development.
* **Callback function**: This runs once the server successfully starts listening. It's best practice to log a message so you know your server is active.

## Step 4: Running and Accessing the Server

### Accessing it in the Browser
Once the server is running, open your web browser and navigate to:
`http://localhost:9000`
* **`localhost`** refers to your own computer.
* **`:9000`** directs the browser to the specific port your server is listening on.

### Running with Auto-Restart
Traditionally, if you change your code, you have to manually stop the server (Ctrl+C) and restart it. Node.js now has a built-in watch mode that restarts the server automatically when you save a file.

Run your file in the terminal using:
```bash
node --watch filename.js
```

***


# 📄 Node.js HTTP Server with File Streaming

## 📌 Overview

This code demonstrates how to create a basic HTTP server in Node.js and serve different types of files (HTML, CSS, JSON) using **streams**.

---

## 🧱 Modules Used

```js
import http from "node:http";
import fs from "node:fs";
```

### 🔹 `http` module

* Built-in Node.js module
* Used to create a server

### 🔹 `fs` module

* File System module
* Used to read files from your system

---

## 🚀 Creating the Server

```js
let server = http.createServer((req, res) => {
```

* `createServer()` creates an HTTP server
* It takes a **callback function** with:

  * `req` → request object (incoming request)
  * `res` → response object (what we send back)

---

## 📤 Sending Files Using Streams

### 💡 What is a Stream?

* A stream allows you to **read data in chunks** instead of loading the entire file at once
* Improves performance for large files

---

## 📄 1. Sending HTML File

```js
let src = fs.createReadStream("./pages/index.html");
res.writeHead(200, { "content-type": "text/html" });
src.pipe(res);
```

### 🔍 Explanation:

* `createReadStream()` → reads file as a stream
* `writeHead(200, {...})` → sets status code & headers
* `content-type: text/html` → tells browser it's HTML
* `pipe()` → sends data from file to response

---