# md-maker

[English](./README.md) | 简体中文

根据 js 配置生成或插入 markdown.

## 安装

```shell
npm install @nmsn/md-maker
```

## 使用

```js
import { md, createMd } from '@nmsn/md-maker';

createMd('./README.md', md([{ type: 'h1', params: '标题' },{ type: 'blockquote', params: '副标题' }]));
```

## 待完成功能

- 补充更多 markdown 类型
- 增加测试用例

## 贡献者

- [nmsn](https://github.com/nmsn)

## 协议

[MIT License](https://github.com/nmsn/md-maker/blob/main/LICENSE)
