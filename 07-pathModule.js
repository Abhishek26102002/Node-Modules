const path=require('path')
console.log(path.sep); // path seperator

const filePath=path.join('/folder', 'subfolder','text.txt')
console.log(filePath);

const base=path.basename(filePath) 
console.log(base); // base path will give u only the needed file in here its "test.txt"

const absolutePath=path.resolve(__dirname,'folder','subfolder','text.txt')
console.log(absolutePath); // absolute path