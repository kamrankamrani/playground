# LINUX & CLI

## Some Usefull tips:

- Macos is **UNIX** based as well as LINUX.

- `Bash` is a subsequent for `Shell` - I think when we are opening a terminal, we are running a shell/bash inside an emulator.

- cd is `change directory` and pwd is `present working directory`.

- Why we have `--` and `-`? With one dash you can combine flags. ex: -help combining 4 flags. That's why we need `--` for words.

- You can add `=` for flags, but _sometimes_ not needed. ex: `ls --ignore=home` === `ls --ignore home`.

- `zsh` and `bash` are very similar.

### search in your commands history:

```
^R (control + R)
```

Press it again for going up in history.

Then press arrow right key and you are in bash with written command.

### Bang Bang

`!!` will run prevoius command for you. Useful usecase:

```
sudo !!
```

will run prevoius command with sudo.

### Some usefull command shortcuts:

```
CTRL A -> will go to begining of the line
CTRL E -> will go end of the line -> This is YANK buffer
CTRL K -> will delete everything after cursur -> This is YANK buffer
CTRL U -> will paste yank buffer to terminal
```

### Signals

They are kind of signals that you can send to your programs. e.g. `kill -9 pid` === `SIGQUIT`. A signal to kill the app.

## Text Editors

### nano:

It is simple and it is almost everywhere. Same as embedded chips.

The related commands are existed in window.

### ed (ee dee)

This is funny one. A one line programming editor. Which is not easy to work. But exists in mac too.

### ex (ee ex)

A history to `vim`. Type `ex file.txt` and then type `visual`, it will go to `vim`.

That's maybe where `vi` comes from. `vim` was a mode of `ex`.

### vim

There bunch of different modes for `vim`. Command mode is one.

Some maybe usefull commands, when you are in command mode:

- delete a line:

```
:d
```

- delete next 100 lines:

```
:d100
```

## interac with files

### less

It is reading programm. It will reading a file with scroll feature and also search feature. Press `q` to exit.

- `less` looks better that `cat` in terms of long texts with scroll.

### tail:

Will print last maybe 10 lines of your file. Opposite of `head`.

```
tail -n //prints the n last lines of your file

tail -f <filename> //will track and print real time changes
```

### touch

Beside creating a file, Technically it will change modified time of a file. You can use `touch` on already existed file. It will just updates the modified time.

### cp

Copy the content.

```
cp source.txt destination.txt //use -R for recursive
```

### mv

Move files. Same as copy.

## Wildcards

### expansion:

- You can use a expansion with placeholders:

```
touch file-{1,2,3}.txt //Expected output with ls: file-1.txt file-2.txt file-3.txt
```

### wildcard:

- `*` is a wildcard

- Use with `ls`:

```
ls file-* //will match all files with file in front and anything after
```

### `?` as wildcard:

- Like `*` but matching as a fixed mask

```
touch file-??.txt // will match exact two characters as mask
```

### range wildcard `{1..10}`

```
touch file{1..10}.txt //will create file1.txt file2.txt ... file10.txt

touch file{a..z}.txt //will create filea.txt fileb.txt ... filez.txt
```

### Space character `\`:

- We will tell we want next character literally:

```
touch file\?.txt //Expected output is file?.txt
```

## Output Streams `1>`:

Meaning that we want to redirect the output of some programm into antother one or another file:

```
touch file-{input,output}.txt

ls 1> file-input.txt //streaming output of ls to a file

cat file-input.txt // expected: file-input.txt \n file-output.txt
```

- `1>` is standard error and `2>` is standard error (using for errors)

- `>>` is just for appending. But if you use `1>` it will replace

## Input Streams `<`:

- Reading from a file and send that to a programm

```
grep "something" < file.txt //will send output of file.txt to grep with its arguments
```

## Pipes:

- `Stream`s was just for reading and writing from files and standard out and so on

- `Pipe`s will connect two program toghether:

```
ls -la | grep "file-5.txt" //it will piping between ls programm and grep programm
```

Usefull example with `ps aux`

## Superuser or `sudo`:

- When using `sudo` it will run that specific command as `superuser or root` and then switches back to normal user

## Group Permissions:

-rwxrwxrwx

- first `-` means it is a file. If it was directory, it would be `d` -> `drwxrwxrwx`

- first 3-block: rwx -> read / write / execute by current user

- second 3-block: rwx -> read / write / execute by group of the current user

- third 3-block: rwx -> read / write / execute by everyone else

## Enviroments

### print all env variables:

```
printenv
```

### Add temporary (session based) variables:

```
USER=show-man

echo $USER //show-man
```

### Add permanently variables:

```
vi /etc/environment //linux

vi ~/.zshrc //macos zsh

vi ~/.bash_profile //macos bash
```

**Note**: you have restart session

**Note**: this is shared for all users

### Exporting variable for specific user:

inside `.bashrc` for Linux and `.zshrc` for mac:

```
export VARIABLE=something //do not use $ at the begining
```

### Processes:

- Following command will print all current running program that you run

```
ps
```

**Note**: run a programm in background need a `&`

```
sleep 10 &
ps //should see the sleep programm there
```

- Following command will print all programm that everyone is running:

```
ps aux
```

- Killing a process / programm

```
kill -9 PID //or kill -SIGKILL PID
```

### Background and Forground with Processes:

- If you stucked at a running process, then you can move it to backgroud:

- First `CTRL+Z` (will suspend running process)

- Then run `jobs` to get ids

```
bg %id //for mac
bg id //for linux
```

**Note**: use `fg` for bringing back to foreground

**Note**: for listing PID too, use `jobs -l`

### Exit codes:

Getting the previous exit code:

```
echo $? //if 0 success if not, it was not success
```

### Conditional running commands `&&`:

```
touch status.txt && date >> status.txt && uptime >> status.txt
```

It is depend on exit code `0` means success. If it is success, it will keep going

**Note**: If you want false condition, use `||`.

### Subcommands:

You can run a process inside another process by `$()`:

```
echo current date is $(date) //It will run date programm inside echo
```
