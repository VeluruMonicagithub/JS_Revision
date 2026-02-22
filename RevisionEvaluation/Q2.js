function createRateLimiter(limit,interval){
    let callCount =0;
    setInterval(() =>{
        callCount =0;
        console.log("Rate limiter reset");
    },interval);
    return function(){
        if(callCount < limit){
            callCount++;
            return `Action Allowed. Call count: ${callCount}`;
        }else{
        return `Rate limit exceeded. Maximum ${limit} calls allowed per ${interval}ms interval.`;
    }
}
}
const Limitaction = createRateLimiter(5,10000);
console.log(Limitaction());
console.log(Limitaction());
console.log(Limitaction());
console.log(Limitaction());
console.log(Limitaction());
console.log(Limitaction());