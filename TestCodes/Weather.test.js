const Weather = require('./Weather')

test('Takes only valid input, throws error otherwise', () => {
    expect(
        validateUserInput())
        .toBe(false)
})
