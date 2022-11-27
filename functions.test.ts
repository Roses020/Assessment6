const {shuffleArray} = require('./utils')
let testArr = ['one','two','three',4,5];

describe('shuffleArray should', () => {

    test('should return an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })

    test('should return an array of the same length as the one passed in', () => {
        expect(shuffleArray(testArr).length).toEqual(testArr.length )
    })

})
