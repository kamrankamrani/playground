## throw <error object>

use `throw` for throwing user defined errors.

#### tip: throw error causes terminate of script without try catch! so be carefull.

## Error object:

main properties of error object is:

```
name: Error name --> like Reference Error

message: Description after error name.

stack: calling stack. this error happens in ''. I think it doesn't important so much.
```

## Custom Error Class

```
// basic
class CustomError extends Error {
    constructor(message) {
        super(message); //initialize error class
        this.name = "Custom Error";
    }
}
```
