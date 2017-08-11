/// <reference path="Validation.ts" />
namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            console.log('---------dsdsf----------------------');
            return lettersRegexp.test(s);
        }
    }
}