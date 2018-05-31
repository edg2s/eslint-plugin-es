# disallow Unicode code point escape sequences (es/no-unicode-codepoint-escapes)

- 🔧 The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.

This rule reports ES2015 Unicode code point escape sequences as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
const a\u{31} = `foo`
const a2 = "a\u{62}b"
```

👌 Examples of **correct** code for this rule:

```js
const a\u0031 = `foo`
const a2 = "a\u0062b"
```

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.2.0/lib/rules/no-unicode-codepoint-escapes.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.2.0/tests/lib/rules/no-unicode-codepoint-escapes.js)