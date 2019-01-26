(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"自定义渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 自定义渲染")]),t._v(" "),s("p",[t._v("在文档中直接使用 Vuese 的默认渲染结果，可能无法适应全部的场景。")]),t._v(" "),s("h2",{attrs:{id:"需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需求","aria-hidden":"true"}},[t._v("#")]),t._v(" 需求")]),t._v(" "),s("p",[t._v("不需要标题，并且想将 "),s("code",[t._v("Props")]),t._v(" 等属性从 "),s("code",[t._v("<h2>")]),t._v(" 改成 "),s("code",[t._v("<h3>")])]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" md "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'markdown-it-vuese'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        vueseRe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/<\\[vuese-h3\\]\\((.+)\\)/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        ruleName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuese-h3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        useRender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vueseRender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" renderRes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" vueseRender"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("genMd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" key "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`### ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("renderRes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\n`")])]),t._v("\n\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("renderRes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("genMd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档","aria-hidden":"true"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("<"),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("[vuese-h3](@/test/MyComponent.vue)")]),t._v("\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("注意我们新增了一条 vuese 规则")])]),t._v(" "),s("h2",{attrs:{id:"结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果","aria-hidden":"true"}},[t._v("#")]),t._v(" 结果")]),t._v(" "),s("h3",{attrs:{id:"props"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("#")]),t._v(" props")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Default")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("name")]),t._v(" "),s("td",[t._v("The name of the form, up to 8 characters")]),t._v(" "),s("td",[s("code",[t._v("String")]),t._v(" / "),s("code",[t._v("Number")])]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("-")])])])]),t._v(" "),s("h3",{attrs:{id:"slots"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[t._v("#")]),t._v(" slots")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Default Slot Content")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("header")]),t._v(" "),s("td",[t._v("Form header")]),t._v(" "),s("td",[s("code",[t._v("<th>title</th>")])])])])]),t._v(" "),s("h3",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" events")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Event Name")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Parameters")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("onclear")]),t._v(" "),s("td",[t._v("Fire when the form is cleared")]),t._v(" "),s("td",[t._v("The argument is a boolean value representing xxx")])])])]),t._v(" "),s("h3",{attrs:{id:"methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" methods")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Method")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Parameters")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("clear")]),t._v(" "),s("td",[t._v("Used to manually clear the form")]),t._v(" "),s("td",[t._v("-")])])])])])}],!1,null,null,null);a.default=n.exports}}]);