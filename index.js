import express from 'express'

const app = express()

app.use(express.json())

app.get('/', function (request, response) {
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document ${Math.random()}</title>
    </head>
    <body>
        <h1>My new cool application</h1>
        <div>${Math.random()}</div>
    </body>
    </html>`
    response.set({
        'Content-Type': 'text/html'
    })
    response.send(html)
})
// { num1: 12, num2: 78 } -> 90
app.post('/calc-sum', function (req, res) {
    const sum = req.body.num1 + req.body.num2
    res.status(200).json(sum)
})

app.listen(3000, () => console.log('Сервер запущен'))