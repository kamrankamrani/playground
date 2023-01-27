# Objects

## Computed properties:

We can use `[]` for dynamic naming of object prototypes and reading from them:

```
const myProp = "this is props"

const myObj = {
    a: 2,
    [myProp]: "this"
}

console.log(myObj["this is prop"]); // this is prop
```

## All of the object props is coerce to string:

```
const myObj = {
    2: 2,       <--- number prop
    [myProp]: "this"
}


console.log(typeof Object.keys(myObj)[0]); //string
```

## Cheking for single property:

use `in` keyword. if `string` before keyword, it is going for search property. else it is filled with property (in for loop).

```
const myObj = {
    2: 2,
    [myProp]: "this"
}


console.log("2" in myObj); // true
```

#### tip: `in` keyword is looking hole prototype chain. Not only obj level.

### Name of all type objects (arrays , objects , ... ) is const. It is a refrence.


## Object.assign  --> Shallow copy (not deeply copy). Only copy values in primitive level.

```
Object.assign(destination, ...sources); <-- you can use more than one object for cloning.
```

## structedClone  --> Deep copy with nested. As you expected.

```
const newObj = structedClone(sourceObj);
```

## "new" keyword:

We can call new with every **function** except arrow functions. It executes inside function and return a value.

This functions are constructor functions.

We can use `this` keyword inside functions.

Usually constructors don't have `return` statement. if you return a primitive, it's ignored.

Only you can expilicit return with objects.

```
function Marry() {
    this.name = "kamran";
    this.sayHi = function () {
        console.log("hi from ", this.name);
    }
    return "123";
}


const myObj = new Marry();

myObj.sayHi(); // hi from kamran
```

#### tip: you can't use "new" with objects. Error: object is not a constructor.

## Symbol:

In one sentence: Symbol is a unique primitive value. Speciall use for unique and hidden keys.

TODO: update.

Symbol has **built-in** methods. Like:

### Symbol.toPrimitive:

Use for an object for to-primitive actions. E.g. `alert` at first call `[Symbol.toPrimitive]`,if it's not found,
looking for `toString` method then `valueof` method.

```
const Animal = {
    isSleep: true,
    getIsSleep() {
        console.log("is sleep: ", this.isSleep);
    },
    [Symbol.toPrimitive](hint) {
        return "from symbol";
    }
}

alert(Animal); //from symbol
```

#### hint: console.log is different from alert. console.log not looking for symbols

### Symbol.iterator:

Use for `for...of` method for objects and iterables.

## Accessor properties:

A property for access and set data.

### Getters and Setters:

set or get a property in desired way. It's like a middleware or a wrapper for how you access properties.

```
const Animal = {
    set food(value) {
        this._food = value;  //<--- we have _food not food
    },
    get food() {
        return `the food is ${this._food}`
    },
}

const Rabbit = Object.create(Animal);

Rabbit.food = "carrot";

console.log(Rabbit.food); // the food is carrot
```

#### tip: don't use same prop in get and set. Causes errors.