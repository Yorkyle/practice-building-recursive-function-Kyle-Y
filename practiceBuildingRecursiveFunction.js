
function reverseString(string) {
    if (string.length === 1) { // when the string length has only one character, it will return the string that was input
        return string;
    }
    return string[string.length - 1] + reverseString(string.slice(0, -1)); //the index of the length-1 is the last character in the string; add to this the rest of the word, and you have a function that continuously hacks off the last character and adds the remaining characters... so the string is being sliced up, then served LIFO
}

console.log(reverseString("Hubert"));