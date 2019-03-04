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
