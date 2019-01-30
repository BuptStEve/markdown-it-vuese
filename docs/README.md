<h1 align="center">markdown-it-vuese</h1>

<p align="center">
    <a href="https://circleci.com/gh/BuptStEve/markdown-it-vuese/tree/master"><img src="https://img.shields.io/circleci/project/github/BuptStEve/markdown-it-vuese/master.svg" alt="Build Status"></a>
    <a href="https://codecov.io/github/BuptStEve/markdown-it-vuese?branch=master"><img src="https://img.shields.io/codecov/c/github/BuptStEve/markdown-it-vuese/master.svg" alt="Coverage Status"></a>
    <a href="https://www.npmjs.com/package/markdown-it-vuese"><img src="https://img.shields.io/npm/v/markdown-it-vuese.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/markdown-it-vuese"><img src="https://img.shields.io/npm/l/markdown-it-vuese.svg" alt="License"></a>
</p>

English | [简体中文](./zh/)

> [Vuese][1] plugin for [markdown-it][2] markdown parser.

With this plugin, you can use [Vuese][1] to automatically generate documents while importing existing `*.vue` files via following syntax.

```md
<[vuese](@/filePath)
```

> The default value of @ is `process.cwd()`.

[Please click here to see the demo](./example/demo.md)

## Install

```bash
$ npm i -S markdown-it-vuese
# OR
$ yarn add markdown-it-vuese
```

## Usage

```js
const md = require('markdown-it')()
    .use(require('markdown-it-vuese') [, options])
```

## Options

```js
const md = require('markdown-it')()
    .use(require('markdown-it-vuese'), {
        root: 'some path',
        vueseRe: /your regexp/,
        useParser: parserRes => parserRes.name,
        useRender: (vueseRender) => {
            const renderRes = vueseRender.render()
            const markdownRes = vueseRender.renderMarkdown()

            return 'something'
        },
        useAll: ({ ... }) => {
            return 'something'
        },
    })
```

### root
* Type: `String`
* Default: `process.cwd()`

Root Directory, this value will replace the @ in file path.

### vueseRe
* Type: `RegExp`
* Default: `/<\[vuese\]\((.+)\)/i`

Regular expression, you can customize it as you like.

### ruleName
* Type: `String`
* Default: `vuese`

Rule name, it will be used by [markdown-it][2], so be careful not to duplicate [existing rules][9].

Use it with `vueseRe`, we can use different rules in the same document to render different results.

```js
const vuese = require('markdown-it-vuese')

const md = require('markdown-it')()
    // default
    // <[vuese](filePath)
    .use(vuese)
    // <[vuese-h3](filePath)
    // No title, `Props` and other attributes should be changed from `<h2>` to `<h3>`
    .use(vuese, {
        vueseRe: /<\[vuese-h3\]\((.+)\)/i,
        ruleName: 'vuese-h3',
        useRender: (vueseRender) => {
            const renderRes = vueseRender.render()
            const genMd = key => `### ${key}\n${renderRes[key]}\n`

            return Object.keys(renderRes).map(genMd).join('')
        },
    })
```

### useParser
* Type: `Function`
* Default: `null`

It takes [@vuese/parser `ParserResult`][7] as a parameter.

If `useParser` exists, it returns the result directly after running, otherwise try running `useRender'.

### useRender
* Type: `Function`
* Default: `null`

It takes [@vuese/markdown-render `Render Class`][8] as a parameter.

If `useRender` exists, it returns the result directly after running, otherwise try running `useAll'.

For example, you can call the following methods to generate objects and markdown documents, respectively.

* `render`: will generate `renderRes`
* `renderMarkdown`: will generate `markdownRes`

### useAll
* Type: `Function`
* Default: `null`

It takes an object as parameters with there attributes: `content`(source file content), `parserRes`, `renderRes`, `markdownRes`.

Return `markdownRes.content` by default, if `useAll` does not exist.

```js
const md = require('markdown-it')()
    .use(require('markdown-it-vuese'), {
        useAll: ({
            content,
            parserRes,
            renderRes,
            markdownRes,
        }) => {
            return 'something'
        },
    })
```

### parserOptions
* Type: `Object`
* Default: `{}`

It passes [@vuese/parser options][5]

### renderOptions
* Type: `Object`
* Default: `{}`

It passes [@vuese/markdown-render options][6]

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) [StEve Young](https://github.com/BuptStEve)

[1]: https://github.com/vuese/vuese
[2]: https://github.com/markdown-it/markdown-it
[3]: https://vuese.org/parser/
[4]: https://vuese.org/markdown-render/
[5]: https://vuese.org/parser/#parseroptions
[6]: https://vuese.org/markdown-render/#renderoptions
[7]: https://vuese.org/parser/#parserresult
[8]: https://vuese.org/markdown-render/#render-class
