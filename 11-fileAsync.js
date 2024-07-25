const { readFile, writeFile } = require("fs");

readFile("./folder/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  //   console.log(result);
  const first = result;
  readFile("./folder/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./folder/file-async.txt",
      `here is result for async method : ${first} ${second} `,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result); //result  udefined hai par file write ho chuka hai
      }
    );
  });
});
