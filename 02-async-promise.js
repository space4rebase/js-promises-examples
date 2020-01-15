
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

asyncAddPromise(VALUES).then(total => console.log(`Main total: ${total}`));

