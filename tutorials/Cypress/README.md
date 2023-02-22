## Cypress tutorial

### contains:

We can add more than one conidition in `contains`:

```
cy.containes("[data-test=test"] , "Sign In");
```

### parents/parent:

find parents/parent of the element:

```
cy.get('[data-test=test]').parents("form") //<-- parents of data-test=test is yeilded
```

### find:

it is child command. finds the child whithin the parent element.

```
cy.get('.article').find('footer')
```
#### tip: you can't use `cy.find("#id")` . causes error. it is child command.

### wrap:

wrap elements to continue using cypress. sometimes return elements are not is cypress but in JQuary.

So you cannot use something like `should` on JQuary.

```
cy.location().then((loc) => {
	// loc here is JQuary not cypress object
	cy.wrap(loc).should('have.class', 'form-container')
})

```





