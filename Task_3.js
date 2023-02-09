var fs = require("fs");
//creating text file and writing into it
fs.writeFile("welcome.txt", "Hello Node", function (err) {
  if (err) {
    return console.error(err);
  }

  //reading the file
  fs.readFile("welcome.txt", function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data.toString());
  });
});
