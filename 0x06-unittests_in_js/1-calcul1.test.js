const assert = require('assert')
const calculateNumber = require('./1-calcul1')

describe('calculateNumber', function() {
    describe('Sum of two Integers', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUM', 4, 2), 6);
        });
    });

    describe('Sum of one round ', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUM', 4, 2.2), 6);
        });
    });

    describe('Sum of one round reverse ', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUM', 2.2, 4), 6);
        });
    });

    describe('Sum of both round ', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUM', 3.5, 2.2), 6);
        });
    });

    describe('SUBTRACT two int', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUBTRACT', 8, 2), 6);
        });
    });

    describe('SUBTRACT one round', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUBTRACT', 8, 2.2), 6);
        });
    });

    describe('SUBTRACT one round reverse', function(){
        it('should return -6', function(){
            assert.strictEqual(calculateNumber('SUBTRACT', 2, 7.5), -6);
        });
    });

    describe('SUBTRACT both round ', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('SUBTRACT', 7.5, 1.5), 6);
        });
    });

    describe('DIVIDE both int ', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('DIVIDE', 12, 2), 6);
        });
    });

    describe('DIVIDE one round', function(){
        it('should return 6', function(){
            assert.strictEqual(calculateNumber('DIVIDE', 12, 1.5), 6);
        });
    });

    describe('DIVIDE one round reverse', function(){
        it('should return 0.2', function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 5), 0.2);
        });
    });

    describe('DIVIDE both round', function(){
        it('should return 0.2', function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });
    });

    describe('DIVIDE if b is 0', function(){
        it('should return Erroe', function(){
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });
});