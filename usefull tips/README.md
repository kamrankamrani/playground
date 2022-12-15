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

## what is [object  Object] means?

It is exposing internall class and kind of object you use. Because we have multiple types of objects like functions, arrays ,... .

for example when you use `toString()` method on objects, It is exposing internall class:

```
let obj = {
    a: 2,
    b: 3
}

console.log(obj.toString()) //[object Object]
```
It means you have an object with Objects class constructor. (it's object from Object).


## why we have arr.toString() ? why it's working perfect?

for example:

```
let arr = [1,2,3]

console.log(arr.toString()) // 1,2,3
```
because arrays have ovverwrite toString method. It returns concatination of values of array.

But if you want to use the real and orginal type of `toString()` you should use `prototype` :

```
let arr = [1, 2, 3];

console.log(arr.toString()) // 1,2,3

console.log(Object.prototype.toString.call(arr)) // [Object Array]
```

Intresting... Isn't it?? :)




