/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const libRoot = path.resolve(__dirname, "../lib/rules")
const categories = {
    ES2018: { rules: [] },
    ES2017: { rules: [] },
    ES2016: { rules: [] },
    ES2015: { rules: [] },
    ES5: { rules: [] },
}
const rules = []

for (const filename of fs.readdirSync(libRoot)) {
    const ruleId = path.basename(filename, ".js")
    const filePath = path.join(libRoot, filename)
    const content = fs.readFileSync(filePath, "utf8")
    const category = /category:[\s\n]+"(.+)"/.exec(content)[1]
    const description = /description:[\s\n]+"(.+?)\.?"/.exec(content)[1]
    const fixable = /fixable:[\s\n]+"(.+)"/.test(content)
    const rule = { ruleId, description, fixable }

    categories[category].rules.push(rule)
    rules.push(rule)
}

module.exports = { categories, rules }