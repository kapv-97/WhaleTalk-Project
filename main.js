var input = 'Turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultArray = [];

for (let i = 0; i < input.length; i++) {
    const phrase = input[i];
    
    for (let j = 0; j < vowels.length; j++) {
        const whale = vowels[j];

       if (phrase === whale) {
        resultArray.push(phrase);

       } 
       if (phrase === 'e') {
        resultArray.push(phrase);
       } else if (phrase === 'u') {
        resultArray.push(phrase);
       }
       
    }
 }

resultString = resultArray.join('').toUpperCase();

console.log(resultString);
