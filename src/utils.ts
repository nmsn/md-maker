import fs from 'fs';
import path from 'path';
import { LF } from './md.js';

type LineType = number | 'last';
//往固定的行写入数据
export const insertMd = (fileName: string, content: string, line: LineType = 0) => {
  const _path = path.resolve('./', fileName);

  // 计算行
  const rows = fs.readFileSync(_path, 'utf8').split(LF);
  const _content = (!content.endsWith(LF) ? `${content}${LF}` : content).split(LF);

  const _line = line === 'last' ? rows?.length : line;

  // 在相应的行插入内容
  rows.splice(_line, 0, ..._content);

  const len = rows.length;

  const outputMdArr = rows.map((item, index) => {
    if (index === len - 1 && item === '') {
      return '';
    }
    return item === '' ? LF : `${item}${LF}`;
  });

  fs.writeFileSync(_path, outputMdArr.join(''));
};

export const createMd = (fileName: string, content: string) => {
  const _path = path.resolve('./', fileName);
  fs.writeFileSync(_path, content + LF);
};
