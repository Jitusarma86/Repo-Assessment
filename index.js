class Calculate {
    add(str) {
        let sum = 0
        if (typeof (str) === 'string') {
            const strLen = str.length;
            if (strLen === 0) {
                return 0
            } else if (strLen === 1) {
                return Number(str)
            } else if (/-\d+/.test(str)) {
                let numbers = str.match(/-?\d+/g).map(Number);
                const negativeNumbers = numbers.filter(num => num < 0);
                return `Nigative number ${negativeNumbers
                    } `
            }
            else {
                const numbers = str.match(/\d+/g).map(Number);
                const len = numbers.length - 1
                for (let i = 0; i <= len; i++) {
                    sum += Number(numbers[i])
                }
                return sum
            }

        } else {
            return 'Invalide String'
        }

    }
}
const calculate = new Calculate()
//const cal = calculate.add('')
//const cal = calculate.add('1')
//const cal = calculate.add('1,5')
//const cal = calculate.add('1,2,3,4,5,6,7')
//const cal = calculate.add('1\n2,3')
//const cal = calculate.add('//;\n1;2')
const cal = calculate.add('-1,-4')
console.log(cal)

export default Calculate;