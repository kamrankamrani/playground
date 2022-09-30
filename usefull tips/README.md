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