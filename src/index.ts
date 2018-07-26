



let webWorker = new Worker('worker.js');
webWorker.onmessage = (message) => {
    console.log("I received", message);
}

document.querySelector(".send").onclick = (event) =>{
    webWorker.postMessage("Send from html");
}