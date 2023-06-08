// const fs = require('fs');
// const path = require('path');

import fs from 'fs';
import path from 'path';

//往固定的行写入数据
function writeFileToLine(filePath, content) {
  const basePath = path.resolve('./');
  const data = fs.readFileSync(basePath + filePath, 'utf8').split(/\r\n|\n|\r/gm); //readFileSync的第一个参数是文件名

  data.splice(data.length - 5, 0, content);
  fs.writeFileSync('./README2.md', data.join('\r\n'));

  console.log(data, data.length);
}

writeFileToLine('./README.md', '123');
