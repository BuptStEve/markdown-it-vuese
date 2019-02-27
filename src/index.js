// @ts-check

const fs = require('fs')
const path = require('path')
const { parser: vueseParser } = require('@vuese/parser')
const { Render: VueseRender } = require('@vuese/markdown-render')

const isFn = fn => typeof fn === 'function'

module.exports = (md, options = {}) => {
    const VUESE_RE = /<\[vuese\]\((.+)\)/i
    const {
        root = process.cwd(),
        vueseRe = VUESE_RE,
        ruleName = 'vuese',
        useAll = null,
        useParser = null,
        useRender = null,
        parserOptions = {},
        renderOptions = {},
    } = options

    md.block.ruler.before('fence', ruleName, getPathToken)
    md.renderer.rules[ruleName] = (tokens, idx, _, env) => {
        const { rawPath } = tokens[idx]
        const filePath = getFilePath(rawPath)
        const rawMd = getMdFromSfc(filePath)

        /* istanbul ignore next */
        if (env.loader) {
            // for @vuepress/markdown-loader
            env.loader.addDependency(filePath)
        }

        // save attributes, like hoistedTags
        const tmpMd = Object.assign({}, md)
        const res = md.render(rawMd, env)

        // restore attributes
        Object.assign(md, tmpMd)

        return res.html || res
    }

    function getFilePath (rawPath) {
        const tmpPath = rawPath
            .replace(/^['|"]/, '')
            .replace(/['|"]$/, '')
            .replace(/^@/, root)

        return path.resolve(root, tmpPath)
    }

    function getPathToken (state, startLine) {
        const pos = state.bMarks[startLine] + state.tShift[startLine]
        const max = state.eMarks[startLine]
        const match = vueseRe.exec(state.src.slice(pos, max))

        if (!match || match.length < 2) return false

        const rawPath = match[1].trim()
        const token = state.push(ruleName, 'div', 0)

        token.rawPath = rawPath
        state.line = startLine + 1

        return true
    }

    function getMdFromSfc (filePath) {
        if (!fs.existsSync(filePath)) return `Not found: ${filePath}`

        try {
            const content = fs.readFileSync(filePath, 'utf-8')
            const parserRes = vueseParser(content, parserOptions)

            if (isFn(useParser)) return useParser(parserRes)

            const vueseRender = new VueseRender(parserRes, renderOptions)

            if (isFn(useRender)) return useRender(vueseRender)

            const renderRes = vueseRender.render()
            const markdownRes = vueseRender.renderMarkdown()

            return isFn(useAll)
                ? useAll({ content, parserRes, renderRes, markdownRes })
                : markdownRes.content
        } catch (e) {
            return e.message
        }
    }
}
