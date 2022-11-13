## for hiding scrollbar, put these code in main-container of the app:

```
.container {
    overflow-y: scroll;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.container::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
}
```

## for copy an array, use `slice()`:

```
let newarr = arr.slice();
```

## for get the length of an object use `object.keys`. It returns an array:

```
const obj = {a:2 , b:3};
Object.keys(obj).length //2
```
#### tip: it's not in Object.prototype .


## some fun fact about strings is JS:

- strings is JS are immutable.
- strings are not arrays but you can treat them like arrays. That's why string has some properties like arrays. ex: .length.
- you can borrow some `nonmutable` array method like `.join` for strings.
- you can borrow like: `Array.prototype.join.call(string)`.


## Objects (objs, arrays ...) can act like refrences. if you copy refrence and chenge the value, the shared object is changed too:

```
const obj = {a: 2 , c: 3};
const obj2 = obj;
obj2.a = 4;
obj; // {a:4 , c: 3} --changed the original value
```



