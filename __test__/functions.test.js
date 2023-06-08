const functions = require('../functions')
const { calculateAge } = require('../functions');
const { calculateTax } = require('../functions');

describe('calculateAge', () => {
    it('should calculate the correct age based on the provided date of birth', () => {
        // Test case 1: Valid date of birth
        const result1 = calculateAge('1990-01-01');
        expect(result1).toBe(33);

        // Test case 2: Invalid date of birth
        const result2 = calculateAge('invalid-date');
        expect(result2).toBe(false);

    })
});

describe('calculateTax', () => {
    it('should calculate the correct tax based on the provided salary', () => {
        // Test case 1: Salary within the first bracket
        const result1 = calculateTax(10000);
        expect(result1).toBe(0);

        // Test case 2: Salary within the second bracket
        const result2 = calculateTax(15000);
        expect(result2).toBe(125);

        // Test case 3: Salary within the third bracket
        const result3 = calculateTax(19000);
        expect(result3).toBe(325);

        // Test case 4: Salary above all brackets
        const result4 = calculateTax(30000);
        expect(result4).toBe(875);
    });
});
