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

## JSON.stringify:

in `JSON.stringify` , the `undefined` and `function` and `symbols` is ommited automatically.

In arrays they replace by `null` , but in objects they are completly ommited:

```
let arr = [1, undefined, 3];

console.log(JSON.stringify(arr)) // [1 , null , 3]

let obj = {
    a: 2,
    b: undefined
}

console.log(JSON.stringify(obj)) // {"a":2}
```

## Falsy values in JS:

```
NaN
0
-0
+0
false
null
undefined
""
```

### tip: {} is true value. We don't have falsy object. all objects are true!


## Coercion on adding ( + ) values:

if only one value is string, all values become a string concatination:

```
let a = "1";
let b = 2;
console.log(a + b); // 12 --> string
```

if all is numbers, all adding togheter mathematically;

### tip: if a value is null or undefined or ... the result is `NaN`.

## Coercion on minus ( - ) values:

apparently all coerce to number. the result is always a number:

```
let a = "1";
let b = 2;
console.log(a - b); // -1 --> number
```

## How virtual DOM is faster than updating real DOM? How React do it?

Modern browsers are smart enuogh to update only parts that it needs.

The story comes from **un-ability** of react. Because when a state chenge or an interaction occures, all of the react app
should be updated.

This is where the virtual DOM comes in. In the update state, react extracts only parts that needs to update.

And then tell to real DOM to update those parts.







