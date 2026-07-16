const palindromes = function (word) {
    const alphanumeric = 'abcdefghijklmnopqrstuvwxyz1234567890';
    const lowerCaseWord = word.toLowerCase();
    const wordArray = lowerCaseWord.split("");
    const cleanArray = wordArray.filter((character) => alphanumeric.includes(character));
    const cleanWord = cleanArray.join("");
    const reversedWord = cleanArray.reverse().join("");
    return cleanWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
