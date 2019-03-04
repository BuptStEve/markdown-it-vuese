# 在 Vuepress 中使用

根据版本的不同，有两种方式引入。

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

详情参阅 [markdown.config](https://v0.vuepress.vuejs.org/zh/config/#markdown-config)

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

详情参阅 [markdown.extendMarkdown](https://vuepress.vuejs.org/zh/config/#markdown-extendmarkdown)
