const functions = require('../functions')
const { calculateAge } = require('../functions');
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