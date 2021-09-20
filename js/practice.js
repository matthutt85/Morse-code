

    
     const letters = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];    
    
     const morse =  [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..",];
    
 

    
const inputValue = document.getElementById(".translator__input");
const outputValue = document.getElementById(".translator__output");


// console.log(letters);
const lettersToMorse = (English) => {
    let indexMatch;
    for (let i = 0; i < letters.length; i++) {
        if (letters[i] == English) {
            indexMatch = i
        }
    }
    return morse[indexMatch];
}

// letters.forEach((letter) => {
//     console.log(letter);
// })
console.log(lettersToMorse("b"));



