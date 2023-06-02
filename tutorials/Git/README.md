# Git tutorial

## general info

- git is for storing data

- data is like key value which key is some **hash** (SHA1) for retriving data

- git stores data in **compressed** shape in a **blob**

- commit is like a **snapshot** of your code.

- if you copy all data and make a new commit with same text, it will be a new `SHA1` because date is changed!

- git strongly uses pointers. data is not gonna copies again.

- when you checkout your branch, you just changed the address of pointer to other branch. that's because it's super fast.

- all info of our git datas are stored in `.git/objects`.

- in `.git/HEAD` shows current working branch that git points to.



## Object types in git

### blob:

```
It contains actual data of the files
```

### tree:

```
It contains infos that a blob can't hold. Like directory or structure.

trees are points to blobs and other trees.
```

### commit:

```
It points to a tree. It contains info about our commit. (author, date, message ...).
```

## Get information of git:

```
git cat-file -t (for type) OR -p (for content) SHA1( about 5 character of hash)

ex: git cat-file -p f16473
```

## Git areas:

### Working area:

- untracked files is here. git don't know about them!

### Staging area:

- with `git add` we move our files from `working area` to `staging area`.

- in here git know about different between two files.

### repo:

- files are finalized and tracked by git. git knows about these files.

## log in one line

```
git log --oneline
```

## create new branch without switch to that branch

```
git branch <branch-name>
```

## move file directly from working area to repo (without add):

```
git commit -a <text>
```
