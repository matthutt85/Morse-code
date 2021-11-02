
const lettersToMorse = (input, letters, morse) => {
    let indexMatch = [];               // empty array
    const inputArray = input.split("") // split input string into an array so we can loop through each letter
    console.log(inputArray)
    for (let i = 0; i < inputArray.length; i++) {  // looping through the new inputArray
        for (let j = 0; j < letters.length; j++) {  // looping through the variable letters array
            const element = letters[j];           // adding a new variable where the element is = to the letters index
            if (inputArray[i] == element) {       // if statement the says if the input array index is == to the element (letters[index])
                indexMatch.push(morse[j]+" ")    // push the morse index into indexMatch, creating an array of the input value
            }
        }
    }
    return indexMatch.join("")     // we then return the value of indexMatch and join the array into a string
    
}

export default lettersToMorse