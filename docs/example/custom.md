# 自定义渲染

在文档中直接使用 Vuese 的默认渲染结果，可能无法适应全部的场景。

## 需求

不需要标题，并且想将 `Props` 等属性从 `<h2>` 改成 `<h3>`

## 配置

```js
const md = require('markdown-it')()
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

## 文档

```md
<[vuese-h3](@/test/MyComponent.vue)
```

::: tip
注意我们新增了一条 vuese 规则
:::

## 结果

<[vuese-h3](@/test/MyComponent.vue)
