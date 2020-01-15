const sumValues = values => values.reduce((total, val) => total + val, 0);

const VALUES = [10, 20, 30, 40, 50];

const DELAY = 2000;

function asyncAdd(values) {
    setTimeout(() => {
        let total = sumValues(values);
        console.log(`Async total: ${total}`);

        return total;
    }, DELAY );
}



let total = asyncAdd(VALUES);

console.log(`Prompt total: ${total}`);

