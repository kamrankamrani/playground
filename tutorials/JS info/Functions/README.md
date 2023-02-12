# Functions

### Function declaration:

declare a function.

### Function expression:

declare a function in middle of expression.

```
let sayHi = function() { //<--- function expression (righthand of = )
  alert( "Hello" );
};
```

#### tip: function declaration is **hoisted** , but function expression **is not**.

#### tip: if argument exceed from function arguments, not error.

## Rest/Spread (...):

Works with any iterable. Arrays, Strings, ....

#### tip: The algorithm of `...` is just like `for...of`.

`[1 , 2 , 3 ]` <== from / to ==> `1,2,3`.

#### tip: works like `Object.assign`. make a shallow copy, not deep copy.

## Function properties:

Functions have some properties. E.g. : `length returns the number of arguments of a function`.

```
function fib(number) {
    return number < 2 ? 1 : fib(number - 1) + fib(number - 2);
}

console.log(fib.length); //1
```

## Arrow function:

### arrow functions has no **this**. It get his `this` from outside if exist. It inherit from parent.
#### tip: `this` in arrow functions is bypass by default to window in non strict.
###  tip: but if you wrapp arrow function in a regular function, this will work just like function.


## Function.bind:

bind returns a new refrence with a exact same contex for every moment. This is hard binding.

#### tip: with binding, you have a new refrence. it is not called. you should call it.


## Function.apply / call :

Call a function with contex in first argument. real call not refrence.

#### tip: call get list of arguments and apply get an array. use `...` for call.