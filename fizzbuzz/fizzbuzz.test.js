const fizzbuzz = require('./fizzbuzz.js');


describe('fizzbuzz', () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(9)).toBe('Fizz');
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
        expect(fizzbuzz(20)).toBe('Buzz');
        expect(fizzbuzz(1)).toBe('1');
        expect(fizzbuzz(2)).toBe('2');
        expect(fizzbuzz(4)).toBe('4');
    });
});
