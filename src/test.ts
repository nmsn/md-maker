import { insertMd } from './utils.js';
import { md } from './md.js';

insertMd(
  'TEST.md',
  md([
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
