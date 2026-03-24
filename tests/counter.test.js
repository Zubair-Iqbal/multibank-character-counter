const { countCharacters, formatOutput } = require('../src/counter');

describe('Character Counter', () => {
    test('hello world example', () => {
        const result = formatOutput(countCharacters('hello world'));
        expect(result).toBe('h:1, e:1, l:3, o:2, w:1, r:1, d:1');
    });

    test('case insensitive', () => {
        const result = formatOutput(countCharacters('Hello'));
        expect(result).toBe('h:1, e:1, l:2, o:1');
    });

    test('whitespace excluded', () => {
        const result = formatOutput(countCharacters('a b c'));
        expect(result).toBe('a:1, b:1, c:1');
    });

    test('empty string', () => {
        expect(countCharacters('')).toBeNull();
    });

    test('all whitespace', () => {
        expect(countCharacters('   ')).toBeNull();
    });

    test('special characters', () => {
        const result = formatOutput(countCharacters('a!a?'));
        expect(result).toBe('a:2, !:1, ?:1');
    });

    test('single char', () => {
        const result = formatOutput(countCharacters('z'));
        expect(result).toBe('z:1');
    });

    test('numbers', () => {
        const result = formatOutput(countCharacters('a1a1'));
        expect(result).toBe('a:2, 1:2');
    });

    test('unicode', () => {
        const result = formatOutput(countCharacters('café'));
        expect(result).toBe('c:1, a:1, f:1, é:1');
    });
});