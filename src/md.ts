import os from 'os';

export const LF = os.EOL;
const ParagraphDividingLine = `${LF}${LF}`;

const paragraph = (content: string[]) => {
  return content.join(ParagraphDividingLine);
};

const heading = (title: string, level: number) => {
  return `${'#'.repeat(level)} ${title}`;
};

const blockquote = (text: string) => {
  return `> ${text}`;
};

const link = (title: string, url: string) => {
  return `[${title}](${url})`;
};

const table = (header: string[], content: string[][]) => {
  const content2TableRow = (row: string[]) => {
    return `|${row.join('|')}|`;
  };

  const headerRow = content2TableRow(header);

  const divider = content2TableRow(Array(header?.length).fill('---'));

  const contentRow = content.map((item) => content2TableRow(item));

  return [headerRow, divider, ...contentRow].join(LF);
};

type HeadingParamsType = { type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'; params: string };
type BlockquoteParamsType = { type: 'blockquote'; params: string };
type LinkParamsType = { type: 'link'; params: [title: string, url: string] };
type TableParamsType = { type: 'table'; params: [header: string[], content: string[][]] };

type DataType = (HeadingParamsType | BlockquoteParamsType | LinkParamsType | TableParamsType)[];

export const md = (data: DataType) => {
  const headingMap = Array(5)
    .fill(undefined)
    .map((_, index) => index + 1)
    .map((item) => [`h${item}`, (title: string) => heading(title, item)]);

  const headingObj = Object.fromEntries(headingMap);

  const funcMap = {
    ...headingObj,
    blockquote,
    link,
    table,
  };

  return paragraph(data.map(({ type, params }) => funcMap[type](...params)));
};
