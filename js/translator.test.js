import { translator } from "./translator";

// When you type the letter a IT SHOULD display the letter a

const { expect, it } = require("@jest/globals");

// it should display all other letters when typed b,c,d,e 

//it should convert the letter into morse code when clicked


describe("Testing for translator()", () => {

    //VAILD TESTS

    // converting a to morse code equivalent
    it ("should convert 'a' to '.-'", () => {
        let result;
        result = translator("a");
        expect(result).toBe(".-");

    });


    it("should convert 'b' to '-...'", () => {
        let result;
        result = translator("b");
        expect(result).toBe("-...");

    });

    it("should convert 'matt' to '--.---'", () => {
        let result;
        result = translator("matt");
        expect(result).toBe("--.---")
    });

    it ("should convert 'matt hutt' to '--.---/......---'", () => {
        let result;
        result = translator("matt hutt");
        expect(result).toBe("--.---/......---");

    });


    // INVALID TESTS -----------------

    it ("should return 'invalid character' if '#' character is logged", () => {
        let result;
        result = translator("#")
        expect(result).toBe("invalid character");
    });
});