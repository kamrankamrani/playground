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

