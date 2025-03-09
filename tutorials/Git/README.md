# Git tutorial

> ## general info

- git is for storing data

- data is like key value which key is some **hash** (SHA1) for retriving data

- git stores data in **compressed** shape in a **blob**

- commit is like a **snapshot** of your code.

- if you copy all data and make a new commit with same text, it will be a new `SHA1` because date is changed!

- git strongly uses pointers. data is not gonna copies again.

- when you checkout your branch, you just changed the address of pointer to other branch. that's because it's super fast.

- all info of our git datas are stored in `.git/objects`.

- in `.git/HEAD` shows current working branch that git points to.

- working directory is in sync with local file system.

- staging index (directory) is tracking working directory changes

> ## Object types in git

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

### Get information of commit:

#### tip: you don't need to `cd` in `.git` directory

```
git cat-file -t (for type) OR -p (for content) SHA1( about 5 character of hash)

ex: git cat-file -p f16473
```

> ## Git areas:

### Working area:

- untracked files is here. git don't know about them!

### Staging area:

- with `git add` we move our files from `working area` to `staging area`.

- in here git know about different between two files.

#### show files in staging area:

```
git ls-files -s
```

### repo:

- The history. files are finalized and tracked by git. git knows about these files.

### Git remove files from staging area:

If you added a file with `git add` , and you don't want that, then use:

```
git reset
```

> ## Git change branch to a specific commit:

- you can move your head pointer to a specific commit.

```
git checkout e348ebc <-- this is specific hash for a commit
```

this state is called **HEAD-LESS** or **DETACHED-HEAD**.

if you commit new changes and then checkout to other branch, your commits are **garbage collected**.

### create and change branch

```
git checkout -b <branch-name>
```

### delete a branch

```
git branch -d <branch-name>
```

> ## Merge

- If `main` branch in not changed and only `feature` branch is changed this is called **Fast Forwarding** merge.

- FF is usefull for minor changes and bug fixes. It is like `rebase`.

- FF is called a linear commit. no new commit is added to history.

- If you want new commit for merge moment, use `--no-ff` flag with `merge` command.

### when we get commit message and when we don't?

- If both branches diverged (changes in history included), then you will need a merge commit message

- If there is no history change in source branch (the branch that you are trying to merge to that), then you will not get any merge commit message and your merge is **fast forwarded**!

### conflict format:

```
# started by this

<<<<<<< HEAD
# here is your content from head (base) branch


# this devide your merge into two chunks
=======


# here is your content from side branch
>>>>>>> branch-a
#this line above show end of conflict
```

#### tip: after resolve conflicts simple `git commit` is enough for merge.

> ## History

for show commit history we use `git log`. some usefull flags:

### for a chunk of time. like yesterday , 2 weeks ago ...

```
 git log --since="yesterday"
```

### for one line and brief

```
git log --oneline
```

### graph for show branch changes

```
git log --graph
```

### logging with parents SHA

```
git log --oneline --graph --parents

output -> <commit-SHA> <parent-SHA> <commit-text>
```

### show more information about a commit

```
git show <hash>
```

### search for rename or moved files:

```
git log --name-status --follow --oneline <filename>
```

### search in commits:

```
git log --grep="fix"
```

### search in specific file:

```
git log -p -- <specific-file>
```

### check what branches are merged/not merged:

```
git branch --merged OR --no-merged <branch-name>
```

> ## git bisect:

- If you want a commit to find and ex. it causes failing your tests and you don't know where this issue created.
- It will list you commits, start to search and you can find the commit that causes the issue.

```
git bisect start
... run the tests ...
git bisect bad
... run the tests ...
git bisect good
```

there is also `git bisect run`. Do research.

> ## mistakes:

- If you changed a file and still **didn't** use `git add`, use this: (like CTRL+Z):

```
git checkout -- <filename>
```

- If you added files with `git add` and still **didn't** use `git commit`, use this:

```
git reset HEAD <filename>
```

this command moves file from `staging area` to `working area`.

- If you commited work, and want to get back:

```
git reset --mixed HEAD~
```

#### tip:

```
git reset --mixed HEAD === git reset
```

#### tip: you can use number for steps to go back: ex. 2 steps:

```
git reset --mixed HEAD~2
```

- If you want a safe revert, use this:

```
git revert <HASH>
```

> ## Rewriting history:

- To change very last commit, after `git add` use `amend` flag:

```
git commit --amend
```

- Rebase is bring all of branch history on top of your branch:

```
git rebase <branch-name>
```

### Merge vs Rebase:

- History! With rebase we put all source branch first and then we will put history of target branch

- For merge, we will merge history (commits) based on their time. No priority for histories.

### a tip about rebase:

When you rebase on a branch, git **will checkout the branch first**. Then places all commits on top of it.

That's why for rebase conflicts, you may see HEAD is on branch you want to rebase on!

### Squash:

- It is an interactive rebase. We can `fixup` or `squash`.

```
git rebase -i HEAD~<number of commit>
```

Then it will show you commit from oldest to newest commits. You can read the manual - usually use `s` for merging to commits into previous one.

#### tip: you can't use `s` or `f` for oldest commit. It will throw an error because there is no previous commit.

> ## Working tree:

- Alternative for `Stash`. It will copy a new folder and will sync and track with main working tree which you created with `git init`.

```
git worktree add <worktree relative path>

ex: git worktree add ../foo-bar
```

- Then if you go to the foo-bar folder, you can track all changes. It is also synced with new changes.

> ## some random usefull commands:

### log in one line

```
git log --oneline
```

### create new branch without switch to that branch

```
git branch <branch-name>
```

### Clone with ssh:

I assume you your basic `ssh` setup. (ssh-keygen)

start the service:

```
eval "$(ssh-agent -s)"
```

then:

```
 ssh-add ~/.ssh/github_kamran
```

### move file directly from working area to repo (without add): NOT SURE

```
git commit -a <text>
```

## Q&Q:

- git revert?
