# disallow spread elements (es/no-spread-elements)

This rule reports ES2015 spread elements as errors.

## Examples

⛔ Examples of **incorrect** code for this rule:

```js
const a1 = [1, 2, ...array]
foo(...a, ...b)
```

## 📚 References

- [Rule source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.2.0/lib/rules/no-spread-elements.js)
- [Test source](https://github.com/mysticatea/eslint-plugin-es/blob/v1.2.0/tests/lib/rules/no-spread-elements.js)