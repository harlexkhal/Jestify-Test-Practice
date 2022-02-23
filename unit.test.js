const stringLength   = require('./task1');
const reverseString  = require('./task2');
const calculatorApp  = require('./task3');
const capitalizeStringFC  = require('./task4');

describe('Task 1', () => {
    test('string length', () => {
        expect(stringLength.stringLength("Naruto Uzumaki")).toBe(14);
    });

    test('string length expanded must be between 1 and 10', () => {
        expect(stringLength.stringLengthVersion2_0("Uchiha")).toBe(6);
    });
});

describe('Task 2', () => {
    test('reverse string', () => {
        expect(reverseString.reverseString("Gojou Senpai")).toMatch("iapneS uojoG");
    });
});

describe('Task 3', () => {
    const app = new calculatorApp();
    describe('add', () => {
        test('3 + 3', () => {
            expect(app.add(3 , 3)).toBe(6);
        });
       
        test('40 + 29', () => {
            expect(app.add(40 , 29)).toBe(69);
        });

        test('8 + 4', () => {
            expect(app.add(8 , 4)).toBe(12);
        });
    });

    describe('minus', () => {
        test('3 - 3', () => {
            expect(app.minus(3 , 3)).toBe(0);
        });
       
        test('40 - 29', () => {
            expect(app.minus(40 , 29)).toBe(11);
        });

        test('8 - 4', () => {
            expect(app.minus(8 , 4)).toBe(4);
        });
    });

    describe('divide', () => {
        test('3 / 3', () => {
            expect(app.divide(3 , 3)).toBe(1);
        });
       
        test('40 / 29', () => {  
            expect(app.divide(40 , 20)).toBe(2);
        });

        test('8 / 0', () => {
            expect(app.divide(8 , 0)).toBe(Infinity);
        });
    });

    describe('multiply', () => {
        test('3 * 3', () => {          
            expect(app.multiply(3 , 3)).toBe(9);
        });
       
        test('4 * 5', () => {
            expect(app.multiply(4 , 5)).toBe(20);
        });

        test('8 * 5', () => {
            expect(app.multiply(8 , 5)).toBe(40);
        });
    });
});

describe('Task 4', () => {
    test('Capitalize First Character of string', () => {
        expect(capitalizeStringFC.capitalizeStringFC("saitama")).toMatch("Saitama");
    });
});