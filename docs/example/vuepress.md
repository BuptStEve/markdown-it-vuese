# Using in Vuepress

According to the different versions, there are two ways.

## 0.x

```js
module.exports = {
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-vuese'), { /* options */ })
    }
  }
}
```

For details [markdown.config](https://v0.vuepress.vuejs.org/config/#markdown-config)

## 1.x

```js
module.exports = {
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-vuese'), { /* options */ })
    }
  }
}
```

For details [markdown.extendMarkdown](https://vuepress.vuejs.org/config/#markdown-extendmarkdown)

::: warning
Note: There are currently the same problems with the [vuepress import code snippets](https://vuepress.vuejs.org/guide/markdown.html#import-code-snippets) functionality. That is, after modifying the source file, the content of the page does not refresh.

The temporary solution is to save the corresponding markdown file.

For more discussion, see [issue 1309](https://github.com/vuejs/vuepress/issues/1309)
:::
