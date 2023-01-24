# Prototype chain:

In objects we have a `[[Prototype]]` property for indicate prototype chain direction.

But it is hidden. We can set this property with **`__proto__`** property:

```
const Animal = {
    isSleep: true,
    getIsSleep() {
        console.log("is sleep: ", this.isSleep);
    }
}

const Rabbit = {
    isSleep: false,
    __proto__: Animal // <---- __proto__ equals to an object.
}

Rabbit.getIsSleep(); // is sleep: false

```

### important tip: `this` is not affected by prototype chain. It is always works as we expected. `this` is always point to the object before `dot`.

In above, `this` is point to the where it is called. points to the rabbit not animal.

#### tip: It doesn't matter where you retirive your property. It is not faster or slower. It is just a refrence.

#### tip: We don't have `prototype` property in ordinary objects. only in native objects like Object, Function, ... we have a `prototype` property.

#### tip: __proto__ is not recommended. Use setPrototypeOf or Obejct.create instead.

## for ... in :

It's returns all of properties in whole `chain`. if you want to be exclusive, use `hasOwnProperty` or `Object.keys`.

## hasOwnProperty:

returns true if property is in object not in parent prototype.

## Object.create

Added in 2012. It is standard for inherit properties from a prototype. but did not provide the ability to get/set it(??).

## Object.setPrototypeOf

Added in 2015. Just like assign __proto__ and equal.

## Object.getPrototypeOf

Added in 2015. Get a prototype of an object.


#### tip: don't change prototype of on object in time. It is not optimized for JS.

