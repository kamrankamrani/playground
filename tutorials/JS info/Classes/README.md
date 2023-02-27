## super:

`super()` is for accessing parent methods.

E.g:

```
class Animal {
	constructor(speed) {
		this.speed = speed;
	}
}

class Rabbit extends Animal {
	constructor(name) {
		super(); // executing parent constructor method
		this.name = name;
	}
}
```

### why we always need `super()` in out extended classes?

Because constructor function in extended classes is not returning an object. So `this` keyword always will be undefined.

extended constructor function is a unique case for this behavior.

#### tip: if we didn'n specify constructor function, the default constructor(...props){ super(...props); } will excuted.

## static

`static` can be used with properties (new added) and methods.

`static` is for declaring methods in **class** self not **instances objects**.

## Private fields:

`private` is accessible form **inside** class but not from outside. **Even extended classess**.



