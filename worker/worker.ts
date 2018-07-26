//set onmessage to receive messages
//pstMesaage to send messages


onmessage = (message)=>{
    //recieve message from main program
    console.log("I received", message);
}

//send message every second
setInterval(()=>{
   postMessage("Hello", undefined);//don't worry about the compile error. seems to work

}, 5000);