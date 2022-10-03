# kyle simpson - recent parts #

### for string concatination (Interpolated strings) : ###

you can use ``` ` ``` ( back ticks!).

**Tip: Enter , tabs , spaces is all includes in string. So you can add new line with _Enter_ in string.**

here is a *tagged* function that convert numbers is strings to the currency numbers *attention to the comments* :

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
