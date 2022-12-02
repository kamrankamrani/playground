# kyle simpson - recent parts #

### for string concatination (Interpolated strings) : ###

you can use ``` ` ``` ( back ticks!).

**Tip: Enter , tabs , spaces is all includes in string. So you can add new line with _Enter_ in string.**

here is a *tagged* function that convert numbers is strings to the currency numbers *(attention to the comments)* :

```
let five = 5;

let string =
    formatCurrency //here we don't pass string as arguments, IDK ???
        `here we are some strings.
give me ${five} dollors`;

console.log(string);

function formatCurrency(strings, ...values) { //values size always is one less than strings size
    let str = "";
    console.log(strings);
    for (let i = 0; i < strings.length; i++) {
        if (i > 0) {
            if (typeof values[i - 1] == "number") {
                str += `$${values[i - 1].toFixed(2)}`
            }
            else { //for non number values
                str += values[i - 1];
            }
        }
        str += strings[i];
    }
    return str;
}
```

### just in mind that we have a `padding` and `trimming` for strings. usefull. ###

## Destructuring: ##

```
function numb() {
    let arr = [1, 2, 3, 4, 5];
    return arr;
}

let obj = {};
let arr = [];
arr = [obj.first, second, third, ...obj.rest] = numb();

console.log(arr); // [1, 2, 3, 4, 5]
```

important note is that the arr fill with hole array not the ** pattern **.


#### you can have empty slots in destructing. like: ####

```
let [
    first,
    ,
    third,
    ...forth
] = numb();
```

in here the second in just ignored.

#### simple swaping variables and positions: ####

```
let x = 10;
let y = 20;
[x, y] = [y, x];
```

### Object destructing sample: ###

```
let obj = {
    a: 2,
    b: 3,
    d: 42
}

let {
    a: num1,
    b: num2
} = obj;

num1; // 2
```

#### important note here is property always goes to the left. (source - target flipped, but property - value not flipped). ####

if variables already declared, you need a `()` :

```
let obj = {
    a: 2,
    b: 3,
    d: 42
}

let num1 , num2; // already declared

({
    a: num1,
    b: num2
} = obj);
```

## Array Methods:

### Array.find :

It's like map and forEach. It's get a callback function that get index and value.

```
let arr = [1, 2, 4, 10, 20, 30];

arr.find((value, index) => value > 10 && console.log(value)) // 20 , 30
```

You can also check the first element that satisfies the condition. More like breaks in the loop:

```
let arr = [1, 2, 4, 10, 20, 30];

const found = arr.find((value) => value > 10);

console.log(found) // 20
```

### Array.findIndex:

It's returns the index of first element:

```
let arr = [1, 2, 4, 10, 20, 30];

const found = arr.findIndex((value) => value > 10);

console.log(found) // 4
```

### Array.includes:

#### best way to check true or false:

It's ** new ** method added in JS and returns true or false for an element:

```
let arr = [1, 2, 4, 10, 20, 30];

const found = arr.includes(12)

console.log(found) // false
```

### Array.indexOf:

It's like Array.findIndex but good for ** primitive ** data types. The difference is about inputs and this isn't get
a callback function.

```
let arr = [1, 2, 4, 10, 20, 30];

const found = arr.indexOf(4) // It doesn't get any callback function

console.log(found)
```


### Array.flat:

It's get a number for input and flats the array. You can also use Infinity for all arrays:

```
let arr = [1, [1, 2], 3, 5]

console.log(arr.flat(Infinity)) // [1, 1, 2, 3, 4, 5]
```

## Itrators and Generators:

### For of:

the point is for...of is work on any array-like object, but not ** ordinary object ** .

#### for making an object iterable, we use `*` with a `Symbol.iterator` for making a `generator`:

```
let numbers = {
    *[Symbol.iterator]({ min = 0, max = 100, step = 1 } = {}) {
        for (let i = min; i <= max; i++) {
            (i % step === 0) && (yield i);
        }
    }
}

console.log("my lucky numbers are: ", ...numbers[Symbol.iterator]({ min: 6, max: 30, step: 4 }))
```

this example shows that we can put anything in `*[Symbol.iterator]`. Even though the object is empty.






### TODO: regular expression
### TODO: unicode charachters?
### TODO: generetors functions?





