const input = "aabcccdeeef";

const inputArray = input.split('');

console.log(inputArray);

const uniqueChar = inputArray.filter((char, index) => {
    if (
        (char !== ' ') && 
        (char !== inputArray[index+1]) && 
        (char !== inputArray[index-1])
        ) {
        return char;
    }
});

const firstUnique = uniqueChar.length > 0 ? uniqueChar[0] : 'No unique characters found';

console.log(firstUnique);