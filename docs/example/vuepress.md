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

::: warning
注意：目前和 [vuepress 的导入代码段](https://vuepress.vuejs.org/zh/guide/markdown.html#%E5%AF%BC%E5%85%A5%E4%BB%A3%E7%A0%81%E6%AE%B5) 功能有相同的问题：即修改源文件后，页面内容不刷新。临时解决方法就是保存一下对应的 markdown 文件。

因为两者都是在 markdown 解析阶段完成的替换。因此页面没有收集到源文件的依赖（md 的 hash 没变），所以没法同步刷新页面内容。更多讨论请参阅 [issue 750](https://github.com/vuejs/vuepress/issues/750)
:::
