## SSH

```
// build a public private key pair
ssh-keygen

// add ssh key to auth file

// connect to host with ssh key
ssh root@<server-ip>
```

## update

```
sudo apt update

sudo apt upgrade
```

#### tip: `apt-get` is older than `apt` and `apt` is more user friendly

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

//check user is correctly have access
sudo cat /var/log/auth.log

//create .ssh directory if needed
cd ~
mkdir .ssh

//create authorized_keys file in .ssh
touch authorized_keys
```

### create ssh connection for new user

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
sudo vi /etc/ssh/sshd_config

//change root permission from yes to no
RootPermission no

//restart ssh deamon
sudo service sshd restart

OR (if you get error: Failed to restart sshd.service: Unit sshd.service not found.)

sudo systemctl restart sshd
```

### get reports:

get all reports regardings authentication logs:

```
sudo cat /var/log/auth.log
```

get sudo entries:

```
grep 'sudo' /var/log/auth.log
```

get active services:

```
systemctl list-units --type=service --state=active
```

## Nginx

it is for handling incoming requests.

```
sudo apt install nginx

sudo service nginx start
```

read default configuration for `nginx`:

```
less /etc/nginx/sites-available/default
```

make a default page for nginx:

```
cd /var/www/html/

vi index.html
```

## setup a website

```
curl https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt-get install nodejs -y

sudo apt install git
```

- note: setup_20 is installing version 20

change the ownership of www directory for not using sudo all the time:

```
sudo chown -R $USER:$USER /var/www

cd /var/www

mkdir app

cd app

git init

touch app.js

npm init
```

Add basic code in `app.js`:

```
const http = require('http');

http.createServer(function(req , res) => {
    res.write("hello from server");
    res.end();
}).listen(3000);

console.log("server started on Port: 3000");
```

Tell nginx to proxy requests to your application:

```
// create a file with a custom name
sudo vi /etc/nginx/sites-enabled/<custom-name>

//put this code block
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /var/www/html;
	index index.html;

	server_name mimee.ir;

	location / {
		proxy_pass http://127.0.0.1:3000;
	}
}

//Edit config for nginx and put this custom file created
sudo vi /etc/nginx/nginx.conf

//in the section Virtual Host Config
//remove the * one to become more specific
        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/<custom-name>;
```

then check with `-t`:

```
sudo nginx -t
```

##### start node app:

pm2 package run your app in background

```
//install a process manager

npm i -g pm2

//start your app with pm2
pm2 start /path/to/app/app.js

//check with pm2

pm2 list

//save pm2 process
pm2 save

//add running your app to start-up
pm2 startup

//it gives you a command and you should enter the command

ex: sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u kam --hp /home/kam
```

## Useful info:

- in `DNS` an `A record` will map a domain to a ip address
