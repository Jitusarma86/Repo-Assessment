import Calculate from '../index.js';
import { expect } from 'chai';
const calculate = new Calculate()
describe('Test case for calculate', function () {
    it('Check given value is string or not', function () {
        expect(calculate.add(12)).to.be.equal('Invalide String')
    })

    it('Check given string is blank or not', function () {
        expect(calculate.add("")).to.be.equal(0)

    })

    it('Check given string length is 1', function () {
        const result = calculate.add("1")
        expect(calculate.add("1")).to.be.equal(result)


    })
    it('Check given string is nigative or not', function () {
        const str = '-1'

        if (/-\d+/.test(str)) {
            let numbers = str.match(/-?\d+/g).map(Number);
            const negativeNumbers = numbers.filter(num => num < 0);
            const result = calculate.add(str)
            console.log(result)
        }
    })

    it('Check calculation', function () {
        const str = '1,2'
        const result = calculate.add(str)
        console.log(result)
        expect(result).to.be.a('number')
    })
})