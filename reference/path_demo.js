const path = require("path");

// Base file name (this file name)
console.log(path.basename(__filename));

// Directory name (parent file name)
console.log(path.dirname(__filename));

// file extension (.extension)
console.log(path.extname(__filename));

// create path  object
console.log(path.parse(__filename));

// concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
