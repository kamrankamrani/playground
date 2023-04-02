## Regex


### str.match(regex)

returns all matches within string if `g` flag is there, otherwise the first match returns.

if more than one is returns, it returns an **array**.

### regex.test(str)

returns `true` if find strings otherwise returns `false`.

### str.replace(regex , replacement)

replace pattern with another string.

#### tip: notice that some of functions is for `strings` and some of them for `regex`.


## character classes

### most important: `\d` for `digits` , `\s` for `space` and `tab` and `newline` , `\w` for `worlds` and `_`.

```
let str = "+7(903)-123-45-67";

alert( str.match(/\d/g).join('') ); // 79031234567
```


## Inverse classes: \D \S \W

like a not gate for `character classes`.

#### tip: dot (.) is any character except `newline`.

