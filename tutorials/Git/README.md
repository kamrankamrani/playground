# Git tutorial

## general info

- git is for storing data

- data is like key value which key is some **hash** (SHA1) for retriving data

- git stores data in **compressed** shape in a **blob**

- commit is like a **snapshot** of your code.

- add commits is in `.git/objects` directory.

- if you copy all data and make a new commit with same text, it will be a new `SHA1` because date is changed!

- git strongly uses pointers. data is not gonna copies again.

- when you checkout your branch, you just changed the address of pointer to other branch. that's because it's super fast.

-