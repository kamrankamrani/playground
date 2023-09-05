## TypeScript

### 'is' Keyword:

TS converts returning boolean type of function to everything you want.

returning type of function below is:

```
user is AdminType
```

if function is `true` then return type is `AdminType`.

```
export default function isAdmin(user: UserType | AdminType): user is AdminType {
  return "token" in user;
}


//usage

if (!isAdmin(singleUser)) {
    //here user is UserType
    console.log("user is usuall", singleUser);
}
else {
    //TS knows here user is AdminType
}
```

### keyof

to make a `union type` between property of a _object type_.

```
const obj = {
  a: "hi",
  b: "b",
  c: "this is c",
  d: 2014,
};


function pluck<T, K extends keyof T>(obj: T, props: K[]): T[K][] {
  return props.map((o) => obj[o]);
}

console.log(pluck(obj, ["a", "b", "d"]));
```

### ReturnType<Type>

finds and give you return type of a function.

```
function func(arg: number) {
  return arg > 3;
}

type M = ReturnType<typeof func>; //boolean
```

### Conditional types

you can have a conditional type. useful for functions with generics type

```
function createLabel<T extends number | string>(arg: T) : T extends number ? IdLabel : NameLabel {
  throw "unimplemented";
}

createLabel(3);
```
