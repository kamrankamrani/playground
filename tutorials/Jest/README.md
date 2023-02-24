## Using ES6 import syntax (with webpack):

for using `import` you need a package and a configuration:

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

in `babel.config.js` add this line:

```
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

## toBe vs toEqual:

for **primitives** use => `toBe` and for others use `toEqual`.

## Async calls:

simply add `then` after function:

```
describe("test randomAnswer function", () => {
    it("test resolved to be resloved", async () => {
        await randomAnswer().then((data) => {
            expect(data).toBe("resolved");
        });
    })
})
```