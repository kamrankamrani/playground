## Web Workers

Service Workers is a special kind of **web workers**.

There are some kind of workers (not service workers). dedicated workers, shared workers ...

most usuall is dedicated workers.

if all tabs is closed, `workers` dies within tabs. but `service workers` can survive even all tabs is closed.

A dedicated worker is only accessible from the script that first spawned it, whereas shared workers can be accessed from multiple scripts.

## Start a workers

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

### get message from sw

just like a normal worker:

```
navigator.serviceWorker.addEventListener("message", onSWMessage);
```
