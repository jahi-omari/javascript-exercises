const reverseString = function(word) {

    const wordArray = word.split("");
    const reversedWordArray = [];

    for(let i = wordArray.length - 1; i >= 0; i--){
        reversedWordArray.push(wordArray[i]);
    }

    let reversedWord = reversedWordArray.join("");
    return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
