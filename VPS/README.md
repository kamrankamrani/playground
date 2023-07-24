## SSH

```
// build a public private key pair
ssh-keygen

// add ssh key to auth file

// connect to host with ssh key
ssh root@<server-ip>
```

## Add user and delete root user

after connect to server:

```
//adding user
adduser <username>

//add user to the sudo group
usermod -aG sudo <username>

//switch to username
su <username>
//--> at this moment type cd ~ to go to the username home directory

//create .ssh directory if needed
cd ~
mkdir .ssh

//create authorized_keys file in .ssh
touch authorized_keys
```

### create ssh for new user

after copy your ssh public key
```
//connect to server as root then switch to username
su <username>

//open authorized_keys file
vi authorized_keys

//add public key in this file then you can check
cat authorized_keys

//exit and check!
ssh <username>@<server_ip>
```

### change user mod for authorized_keys and cancel root access

after switch to username
```
//go to .ssh directory
chmod 644 authorized_keys

//open sshd_config file
sudo vi /tc/ssh/sshd_config

//change root permission from yes to no
RootPermission no

//restart ssh deamon
sudo service sshd restart
```
