import lettersToMorse  from "./translator.js"
import {letters, morse} from "../data/data.js"

const inputValue = document.querySelector(".translator__container--text");
const outputValue = document.querySelector(".translator__container--textOutput");
const convert = document.querySelector(".button__convert");
const reset = document.querySelector(".button__reset");

convert.addEventListener('click', () => {
    const output = lettersToMorse(inputValue.value, letters, morse)
    
    outputValue.value = output;
});

reset.addEventListener('click', () => {
    inputValue.innerText = ""
});