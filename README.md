<h1 align="center">markdown-it-vuese</h1>

> [Vuese][1] plugin for [markdown-it][2] markdown parser.

借助这个插件，你可以通过下述的语法在导入已经存在的 `*.vue` 文件的同时，使用 [Vuese][1] 自动生成文档。

```md
<[vuese](@/filePath)
```

> 此处的 @ 默认值是 `process.cwd()`

[实际效果请点击这里](https://buptsteve.github.io/markdown-it-vuese/example/)

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
* 类型：`String`
* 默认值：`process.cwd()`

根路径，路径中填写的 `@` 会被其替换。

### vueseRe
* 类型：`RegExp`
* 默认值：`/<\[vuese\]\((.+)\)/i`

匹配正则，不满意默认匹配规则可以自定义。

### ruleName
* 类型：`String`
* 默认值：`vuese`

注册的规则名，使用场景是改写规则名，实现在同一份文档中使用不同规则，渲染出不同的结果。

```js
const md = require('markdown-it')()
    // 默认渲染结果
    .use(require('markdown-it-vuese'))
    // <[vuese-h3](filePath)
    // 自定义新规则，不需要标题，并将 Props 等属性从 <h2> 改成 <h3>
    .use(require('markdown-it-vuese'), {
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
* 类型：`Function`
* 默认值：`null`

接受 [@vuese/parser 解析后的结果][7]。若存在，则直接运行后返回结果，否则尝试运行 `useRender`。

### useRender
* 类型：`Function`
* 默认值：`null`

接受 [@vuese/markdown-render 初始化后的渲染实例][8]。若存在，则直接运行后返回结果，否则尝试运行 `useAll`。

例如可以调用以下方法分别生成对象和 md

* `render`: 生成 `renderRes`
* `renderMarkdown`: 生成 `markdownRes`

### useAll
* 类型：`Function`
* 默认值：`null`

以对象形式接受以下参数 `content`（源文件内容）, `parserRes`, `renderRes`, `markdownRes`。若不存在则默认返回 `markdownRes.content`。

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
* 类型：`Object`
* 默认值：`{}`

透传 [@vuese/parser 的参数][5]

### renderOptions
* 类型：`Object`
* 默认值：`{}`

透传 [@vuese/markdown-render 的参数][6]

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) StEve Young

[1]: https://github.com/vuese/vuese
[2]: https://github.com/markdown-it/markdown-it
[3]: https://vuese.org/parser/
[4]: https://vuese.org/markdown-render/
[5]: https://vuese.org/zh/parser/#parseroptions
[6]: https://vuese.org/zh/markdown-render/#renderoptions
[7]: https://vuese.org/zh/parser/#parserresult
[8]: https://vuese.org/zh/markdown-render/#render-%E7%B1%BB
