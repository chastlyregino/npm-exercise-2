const { argv } = require('node:process');

argv.shift();
argv.shift();

console.log(`Number of Arguments: ${argv.length}`);

const str = argv.join(' ');

const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

for (let char of str.toLowerCase()){
    if (vowels.includes(char)){
        count++;
    }
}

console.log(`Number of Vowels: ${count}`);
