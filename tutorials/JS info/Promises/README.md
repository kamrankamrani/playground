## Promise chain:

in the chain if in any step you `return` a `new Promise`, next steps is waiting for resolve the promise:

```
new Promise(resolve => {
    setTimeout(resolve, 1000);
}).then(() => {
    console.log("first step");
    return new Promise(resolve => {
        setTimeout(resolve, 2000); // <=== waits here for resolve then goes furthur
    })
}).then(() => {
    console.log("second step");
}).catch(err => {
    console.log("error is ", err);
})
```

#### you don't need any return value but you can return any value:

```
new Promise(resolve => {
    setTimeout(resolve, 1000);
}).then(() => {
    console.log("first step");
    return "i'm resolved"
}).then((data) => {
    console.log("second step", data); // second step i'm resolved
}).catch(err => {
    console.log("error is ", err);
})
```

## Error handling in promise chain:

if any error like `syntax error` or manualy `throw new Error`, it get in nearest **catch** method.

