const fs = require("fs");
const path = require("path");

// create a folder
// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created...");
// });

// crete and write to file
fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "hello world!\n",
  (err) => {
    if (err) throw err;
    console.log("File written...");
  }
);

// append file
fs.appendFile(
  path.join(__dirname, "test", "hello.txt"),
  "hello node js!",
  (err) => {
    if (err) throw err;
    console.log("File append...");
  }
);

// read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log("Data in file is below:");
  console.log(data);
});

// rename file
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("file renamed...");
  }
);
