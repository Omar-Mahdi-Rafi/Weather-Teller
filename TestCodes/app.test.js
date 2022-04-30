//These test files has been created a expressJS package called JEST

const app = require('./app')

test('properly starts the app on localhost:3000', () => {
    expect(
      (app.listen(3000)
           )
            .toBe(console.log("This server is running on port 3000")) 
})
