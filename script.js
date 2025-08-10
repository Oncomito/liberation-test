const fs = require('fs');
var i = 0;
fs.readFile('text.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Errror", err);
    return;
  }
  while(i < 10) {
    console.log(data);
    i++;
  }
});

fs.appendFile('text.txt', 'wow', (err) => {
  if (err) {
    console.error("\nError writing file", err);
    return;
  }
  console.log("File written successfully");
});