
const sumValues = values => values.reduce((total, val) => total + val, 0);

const VALUES = [10, 20, 30, 40, 50];

const DELAY = 2000;

function asyncAddPromise(values) {
    return new Promise (callback => 
        setTimeout(()=> {
            let total = sumValues(values);
            console.log(`Async total: ${total}`);
            callback(total);
    
        }, 2000)
    );
}

async function doTask() {
    let total = await asyncAddPromise(VALUES);
    console.log(`Main Total: ${total}`);
}

doTask();