import fs from 'fs';
import path from 'path';
import { LF } from './md.js';

//往固定的行写入数据
export const insertMd = (fileName: string, content: string, line = 0) => {
  const _path = path.resolve('./', fileName);

  // 计算行
  const rows = fs.readFileSync(_path, 'utf8').split(LF);
  const _content = (!content.endsWith(LF) ? `${content}${LF}` : content).split(LF);

  // 在相应的行插入内容
  rows.splice(line, 0, ..._content);
  const outputMd = rows.map((item) => (item === '' ? LF : `${item}${LF}`)).join('');

  fs.writeFileSync(_path, outputMd);
};

export const createMd = (fileName: string, content: string) => {
  const _path = path.resolve('./', fileName);
  fs.writeFileSync(_path, content);
};
