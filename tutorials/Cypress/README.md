## Cypress tutorial

## get:

Yields one or more than one element from DOM. maybe most use one command:

```
cy.get("[data-test=test]");
```

## contains:

Get DOM element that containt a **text**. Also you can use with combine with `selectors`.
We can add more than one conidition in `contains`:

```
cy.containes("[data-test=test"] , "Sign In");
```

#### tip: cy.contains returns only one element. The first one.

## parents/parent:

find parents/parent of the element:

```
cy.get('[data-test=test]').parents("form") //<-- parents of data-test=test is yeilded
```

## find:

it is child command. finds the child whithin the parent element.

```
cy.get('.article').find('footer')
```
#### tip: you can't use `cy.find("#id")` . causes error. it is child command.
#### tip: `find` returns more than one element if existed.

## wrap:

wrap elements to continue using cypress. sometimes return elements are not is cypress but in JQuary.

So you cannot use something like `should` on JQuary.

```
cy.location().then((loc) => {
	// loc here is JQuary not cypress object
	cy.wrap(loc).should('have.class', 'form-container')
})

```

##invoke

most common case for `invoke`:

### get the text of element:

```
cy.get("[data-test=test]").invoke("text").then( text => {
	expect(text).to.equal("email");
})
```

### get css of element:

```
cy.get("[data-test=test]").invoke("attr" ,"class").then( classValue => {
	expect(classValue).to.contain("checked");
})
```

### get property of an element (developer console in properties tab):

```
cy.get("[data-test=test]").invoke("prop" ,"value").then( classValue => { // value is the name of the property
	expect(classValue).to.contain("checked");
})
```

#### tip: some other properties is scrollTop , tagName , ...

## first()

get the first element of set of elements.

## check() and should('be.checked')

This commands are for radio buttons. `check()` for check radio and `should('be.checked')` is for assertion.

#### tip: for `uncheck` the radio buttons use `click()`.

## eq

in the arrays of DOM elements, you can use `eq(index)` for select the element of an array:

```
cy.get("[data-test=test]").eq(0).click() // click on the first element
```

## each()

Iterate over an array , ... . It is like `map` function in javascript.

# Mocking APIs:

## cy.intercept:
