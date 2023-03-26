const assert = require('assert')
const calculateNumber = require('./0-calcul1')

describe('calculateNumber', function() {
    describe('Two integers', function() {
        it('should a round number', function() {
            assert.strictEqual(calculateNumber(4, 2), 6);
        });
    });

    describe('one round 1', function() {
        it('should return 9', function() {
            assert.strictEqual(calculateNumber(3.5, 5), 9);
        });
    });

    describe('one round 2', function() {
        it('should return 9', function() {
            assert.strictEqual(calculateNumber(5, 3.5), 9);
        });
    });

    describe('one round floor 1', function() {
        it('should return 8', function() {
            assert.strictEqual(calculateNumber(5, 3.3), 8);
        });
    });

    describe('one round floor 2', function() {
        it('should return 8', function() {
            assert.strictEqual(calculateNumber(3.3, 5), 8);
        });
    });

    describe('Round down and up', function() {
        it('should return 9', function() {
            assert.strictEqual(calculateNumber(3.3, 5.5), 9);
        });
    });

    describe('Round down and up reverse', function() {
        it('should return 9', function() {
            assert.strictEqual(calculateNumber(5.5, 3.3), 9);
        });
    });

    describe('Round up both', function() {
        it('should return 10', function() {
            assert.strictEqual(calculateNumber(5.5, 3.5), 10);
        });
    });

    describe('Round down both', function() {
        it('should return 8', function() {
            assert.strictEqual(calculateNumber(5.3, 3.3), 8);
        });
    });

});