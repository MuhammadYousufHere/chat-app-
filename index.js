const fs = require("fs");
let data = {
  name: "Yousuf",
  professon: "Programmer",
};

// write

fs.writeFile("data.json", JSON.stringify(data), (error) =>
  console.log("Write finished! ", error)
);

// read
// -1
fs.readFile("data.json", "utf-8", (error, data) => console.log(data));

// -2

let dataJSON = require("./data.json");
console.log("Second Method", dataJSON);
