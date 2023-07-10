# md-maker

English | [简体中文](./README.zh-CN.md)

Generate or insert markdown based on js configuration.

## Install

```shell
npm install @nmsn/md-maker
```

## Usage

```js
import { md, createMd } from '@nmsn/md-maker';

createMd('./README.md', md([{ type: 'h1', params: 'title' },{ type: 'blockquote', params: 'subtitle' }]));
```

## Todo

- Add more markdown rule.
- Add test case.

## Contributing

- [nmsn](https://github.com/nmsn)

## License

[MIT License](https://github.com/nmsn/md-maker/blob/main/LICENSE)
