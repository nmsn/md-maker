import { write, LF } from './utils.js';

import fs from 'fs';
import path from 'path';

//往固定的行写入数据
export const writeFileToLine = (fileName: string, content: string, line = 0) => {
  const _path = path.resolve('./', fileName);

  const rowWithBlankLine = fs.readFileSync(_path, 'utf8').split(/\r\n|\n|\r/gm); //readFileSync的第一个参数是文件名

  const newContent = (() => {
    if (!content.endsWith(LF)) {
      return `${content}${LF}`;
    }

    return content;
  })();
  const _content = newContent.split(/\r\n|\n|\r/gm);
  rowWithBlankLine.splice(line, 0, ..._content);

  const result = rowWithBlankLine.map((item) => {
    if (item === '') {
      return LF;
    }

    return `${item}${LF}`;
  });
  fs.writeFileSync(_path, result.join(''));
};

export const createNewFile = (fileName: string, content: string) => {
  const _path = path.resolve('./', fileName);
  fs.writeFileSync(_path, content);
};

writeFileToLine(
  'README3.md',
  write([
    { type: 'h1', params: '123' },
    { type: 'h2', params: '123' },
    { type: 'h3', params: '123' },
    { type: 'h3', params: '123' },
    { type: 'blockquote', params: '123' },
    { type: 'link', params: ['123', '123'] },
    {
      type: 'table',
      params: [
        ['测试', '测试2'],
        [
          ['123', '124'],
          ['dasd', 'asd'],
        ],
      ],
    },
  ])
);
