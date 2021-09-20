import { lettersToMorse } from "../js/translator.js"


// When you type the letter a IT SHOULD display the letter a

const { expect, it } = require("@jest/globals");

// it should display all other letters when typed b,c,d,e 

//it should convert the letter into morse code when clicked


describe("Testing for lettersToMorse()", () => {

    //VAILD TESTS

    // converting a to morse code equivalent
    it ("should convert 'a' to '.-'", () => {
        let result;
        result = lettersToMorse("a");
        expect(result).toBe(".-");

    });


    it("should convert 'b' to '-...'", () => {
        let result;
        result = lettersToMorse("b");
        expect(result).toBe("-...");

    });

    it("should convert 'matt' to '--.---'", () => {
        let result;
        result = lettersToMorse("matt");
        expect(result).toBe("--.---")
    });

    it ("should convert 'matt hutt' to '--.---/......---'", () => {
        let result;
        result = lettersToMorse("matt hutt");
        expect(result).toBe("--.---/......---");

    });

    // if numbers are entered in

    it ("should return '.----' if the number '1' has been entered", () => {
        let result;
        result = lettersToMorse(1);
        expect(result).toBe(".----")
    })

    it ("should return '.----..---...--' if the number 123 has been entered", () => {
        let result;
        result = lettersToMorse(123);
        expect(result).toBe(".----..---...--")
    })


    // INVALID TESTS -----------------

    it ("should return 'invalid character' if '#' character is logged", () => {
        let result;
        result = lettersToMorse("#")
        expect(result).toBe("invalid character");
    });
});