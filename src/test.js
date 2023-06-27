import { writeFileToLine } from './utils.js';
import { write } from './md.js';

writeFileToLine(
  'TEST.md',
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
