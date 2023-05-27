## Web Workers

Service Workers is a special kind of **web workers**.

There are some kind of workers (not service workers). dedicated workers, shared workers ...

most usuall is dedicated workers.

if all tabs is closed, `workers` dies within tabs. but `service workers` can survive even all tabs is closed.

A dedicated worker is only accessible from the script that first spawned it, whereas shared workers can be accessed from multiple scripts.

## Start a worker

```
const worker = new Worker("/js/worker.js"); // address of file 

worker.addEventListener("message", handleWorkerMessage);
```

### Send and recieve message in worker:

```
self.postMessage("Hi from worker");

self.onmessage = onWorkerMessage;

function onWorkerMessage(evt) {
	console.log(`worker recieved: ${evt.data}`);
}
```

### Send and recieve message in client(script):

```
var worker;
worker = new Worker("/js/worker.js");

worker.postMessage({ start: true });

worker.addEventListener("message", handleWorkerMessage);

function handleWorkerMessage(evt) {
	console.log(evt.data);
}
```


## Service Worker

Like a proxy. All your requests (css , ajax , ...) first go to the worker then go outbound.

a usfull link:

```
https://serviceworke.rs/
```

### detect offline / online status:

```
var isOnline = ("onLine" in navigator) ? navigator.onLine : true;

window.addEventListener("online", function online() {
		
});

window.addEventListener("offline", function offline() {
		
});
```

### Create a service worker

```
var usingSW = ("serviceWorker" in navigator);
var swRegistration;
var svcWorker;
	
async function initServiceWorker() {
	swRegistration = await navigator.serviceWorker.register("/sw.js", {
		updateViaCache: "none"
	});

	svcWorker = swRegistration.installing || swRegistration.waiting || swRegistration.active; //3 phase of sw

	navigator.serviceWorker.addEventListener("controllerchange", function ctrchange {
		svcWorker = navigator.serviceWorker.controller; //this is for new service workers
	})
}
```

### basic service worker code

```
"use strict";

// TODO
const version = 1;

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);

main().catch(console.error);

async function main() {
    console.log(`service worker v${version} is starting...`);
}

async function onInstall(evt) {
    console.log(`service worker v${version} is installed.`);
    self.skipWaiting(); //no need to hard refresh for new content
}

function onActivate(evt) {
    evt.waitUntil(handleActivation()); //tells browser wait untill this function is done
}

async function handleActivation() {
    await clients.claim();
    console.log(`service worker v${version} is activated.`);
}
```

### recieve message from service worker

just like a normal worker:

```
navigator.serviceWorker.addEventListener("message", onSWMessage);
```

### send message to service worker

```
function sendSWMessage(msg, target) { //this logic automatically pick current active sw
	if (target) {
		target.postMessage(msg);
	}
	else if (svcWorker) {
		svcWorker.postMessage(msg);
	}
	else {
		navigator.serviceWorker.controller.postMessage(msg);
	}
}
```

and **target** is:

```
evt.ports && evt.ports[0] //evt is event from "message" event in getting service worker message
```

ports is something like a channel for multiple pages talking to sw.

it is like updating for all pages.

### recieve message from client in service worker

```
self.addEventListener("message" , onMessage);
```

### send message to client in service worker

it is a little bit complicated and I don't know what exactly happens, but it works:

```
async function sendMessage(msg) {
    const allClients = await clients.matchAll({ includeUncontrolled: true });

    return Promise.all[
        allClients.map((client) => {
            const chan = new MessageChannel();
            chan.port1.onmessage = onMessage;
            return client.postMessage(msg, [chan.port2]);
        })
    ]
}
```


## Cache

first build your object for cache urls. you can have `admin/user` or `loggedin/out`.

```
const cacheName = `cache-${version}`;

const urlsToCache = {
    loggedOut: [
        "/",
        "/about",
        "/contact",
        "/login",
        "/404",
        "/offline",
        "/js/blog.js",
        "/js/home.js",
        "/js/login.js",
        "/js/add-post.js",
        "images/logo.gif",
        "/images/offline.png",
        "/css/style.css"
    ]
}
```

for put caches into browser, use this logic:

```
async function cacheLoggedOutFiles(forcedReload = false) {
    const cache = await caches.open(cacheName);

    return Promise.all(
        urlsToCache.loggedOut.map(async (url) => {
            try {
                let res;
                if (!forcedReload) {
                    res = await cache.match(url);
                    if (res) {
                        return res;
                    }
                }
                let fetchOptions = {
                    method: "GET",
                    cache: "no-cache",
                    credentials: "omit"
                };
                res = await fetch(url, fetchOptions);
                if (res.ok) {
                    await cache.put(url, res);
                }
                else {
                    console.log("fetch is not ok");
                }
            } catch (error) {
                console.log(`cache error ${error}`);
            }
        })
    )
}
```

where to call this function?

in the `main` function **without force** and in the `handleActivation` **with force true**.

### request

enable fetch event:

```
self.addEventListener("fetch", onFetch);
```

you can have various methods. here is some basic (server first):

```
async function onFetch(evt) {
    evt.respondWith(router(evt.request));
}

async function router(req) {
    let url = new URL(req.url);
    let reqUrl = url.pathname;
    let cache = await caches.open(cacheName);
    let res;

    if (url.origin == location.origin) {
        try {
            let fetchOptions = {
                method: req.method,
                headers: req.headers,
                credentials: "omit",
                cache: "no-store"
            };
            res = await fetch(req.url, fetchOptions);
            if (res && res.ok) {
                await cache.put(reqUrl, res.clone());
                return res;
            }
        } catch (error) {
            // console.log(`router func error ${error}`);
        }

        res = await cache.match(reqUrl);

        if (res) {
            return res.clone();
        }
    }
}
```