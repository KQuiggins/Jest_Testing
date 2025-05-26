const fizzbuzz = require('./fizzbuzz.js');


describe('fizzbuzz', () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
    });
});
