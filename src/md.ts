import os from 'os';

// https://www.markdownguide.org/cheat-sheet/

export const LF = os.EOL;
const ParagraphDividingLine = `${LF}${LF}`;

const paragraph = (content: string[]) => {
  return content.join(ParagraphDividingLine);
};

const heading = (title: string, level: number) => {
  return `${'#'.repeat(level)} ${title}`;
};

const text = (text: string) => text;

const orderedList = (data: string[]) => {
  const content = data.map((text, index) => `${index + 1}. ${text}`);
  return content.join(LF);
};

const unorderedList = (data: string[]) => {
  const content = data.map((text) => `- ${text}`);
  return content.join(LF);
};

const horizontalRule = () => '---';

// TODO style
const image = ({ alt, url }: { alt: string; url: string }) => {
  return `![${alt}](${url})`;
};

const taskList = (data: { text: string; checked?: boolean }[]) => {
  const content = data.map(({ text, checked }) => `- [${checked ? 'x' : ' '}] ${text}`);
  return content.join(LF);
};

const blockquote = (text: string) => {
  return `> ${text}`;
};

const link = ({ title, url }: { title: string; url: string }) => {
  return `[${title}](${url})`;
};

const table = ({ header, content }: { header: string[]; content: string[][] }) => {
  const content2TableRow = (row: string[]) => {
    return `|${row.join('|')}|`;
  };

  const headerRow = content2TableRow(header);

  const divider = content2TableRow(Array(header?.length).fill('---'));

  const contentRow = content.map((item) => content2TableRow(item));

  return [headerRow, divider, ...contentRow].join(LF);
};

type TextType = { type: 'text'; params: string };
type HeadingParamsType = { type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'; params: string };
type ListType = { type: 'orderedList' | 'unorderedList'; params: string[] };
type HorizontalRuleType = { type: 'horizontalRule' };
type ImageType = { type: 'image'; params: { alt: string; url: string } };
type TaskListType = { type: 'taskList'; params: { text: string; checked: boolean }[] };
type BlockquoteParamsType = { type: 'blockquote'; params: string };
type LinkParamsType = { type: 'link'; params: { title: string; url: string } };
type TableParamsType = { type: 'table'; params: { header: string[]; content: string[][] } };

type DataType = (
  | TextType
  | HeadingParamsType
  | ListType
  | HorizontalRuleType
  | ImageType
  | TaskListType
  | BlockquoteParamsType
  | LinkParamsType
  | TableParamsType
)[];

export const md = (data: DataType) => {
  const headingMap = Array(5)
    .fill(undefined)
    .map((_, index) => index + 1)
    .map((item) => [`h${item}`, (title: string) => heading(title, item)]);

  const headingObj = Object.fromEntries(headingMap);

  const funcMap = {
    ...headingObj,
    text,
    blockquote,
    link,
    image,
    table,
    orderedList,
    unorderedList,
    horizontalRule,
    taskList,
  };

  return paragraph(
    data.map((item) => funcMap[item.type](item.type !== 'horizontalRule' ? item.params : undefined))
  );
};

const bold = (text: string) => {
  return `**${text}**`;
};

const italic = (text: string) => {
  return `*${text}*`;
};

const code = (text: string) => {
  return `\`${text}\``;
};

export const descriptor = {
  bold,
  italic,
  code,
};
