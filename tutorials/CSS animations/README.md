## CSS animations

### basics

#### default fallback for `var`:

```
var(--variable , default);
```

### Transition

- It is the change between two states.

- It is like take me from point A to point B. It doesn't matter what happens between them.

multiple transition properties:

```
transition-property:        background ,    transform;
transition-timing-function: linear ,        cubic-bezier(0.075, 0.82, 0.165, 1);
transition-duration:        1s ,            2s;
```

####tip: use cases: hover

#### tip: you can have cascade transition values:

```
  transition-delay: 0s; <-- in the parent

  &:hover {
    transition-delay: 0.5s;
    background-color: navy;
    transform: scale(2);
  }
```

now you have seperate delay on hover value and hover-back value.

## Animations

- you can have two animations on one element.

- in every seprate keyframe percent, you can have seperate ex. timing-function.

###$ animation fill mode:

animations cannot change behavior of the element after or before animation.

`animation-fill-mode` can change this behavior.

It moves element to the start point of animation and keep element at the last frame.

