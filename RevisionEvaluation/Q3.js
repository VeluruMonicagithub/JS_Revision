const timers = {};
let timerID = 0;

function mySetInterval(callback, delay){
    const id = ++timerID;
    function repeat(){
        timers[id] = setTimeout(() => {
            callback();
            repeat();
        },delay);
    }
    repeat();
    return id;
}
function myClearInterval(id){
    clearTimeout(timers[id]);
    delete timers[id];
}

const myID = mySetInterval(() => console.log("hello"),1000);
setTimeout(() => myClearInterval(myID),5000);