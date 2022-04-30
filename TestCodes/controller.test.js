const controller = require('./controller')

test('Ensures valid weather update rendering', () => {
    expect(getWeather()
        )
        .toBe(render("index", {
            error: weather.errors.toString()))
})

test('Ensures rendering Homepage', () => {
     expect(renderHomePage(req, res)
        )
        .toBe(render("home"))
})

test('Ensures rendering about page', () => {
    expect(renderAboutPage(req, res)
        )
        .toBe(render("about"))
})
