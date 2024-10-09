import Calculate from '../index.js';
import { expect } from 'chai';
const calculate = new Calculate()
describe('Test case for calculate', function () {
    it('Check given value is string or not', function () {
        expect(calculate.add(12)).to.be.equal('Invalide String')
    })


})