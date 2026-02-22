async function runSequential(tasks,delay){
    const results = [];
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve,ms));
    try{
        for(let i =0;i< tasks.length;i++){
            const result = await tasks[i]();
            results.push(result);
            if(i<tasks.length - 1){
                await sleep(delay);
            }
        }
        return results;
    }catch(error){
        return `Execution stopped:${error.message}`;
    }
    }

const tasklist = [
    async () => "Task 1 complete",
    async () => "Task 2 complete",
    async () => "Task 3 complete",
    async () => "Task 4 complete"

];

runSequential(tasklist,1000).then (console.log);