# Custom Rendering

Using Vuese's default rendering results directly in the document may not be suitable for all scenarios.

## Requirements

No title, `Props` and other attributes should be changed from `<h2>` to `<h3>`.

## Config

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

## Markdown

```md
<[vuese-h3](@/test/MyComponent.vue)
```

::: tip
Notice that we add a new vuese rule.
:::

## Result

<[vuese-h3](@/test/MyComponent.vue)
