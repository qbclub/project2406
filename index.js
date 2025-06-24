import express from 'express'
import mongoose from 'mongoose'
const app = express()
app.use(express.json())

app.get('/', function (request, response) {
    let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>sfhhdhsddg</div>
    <div>${Math.random()}</div>
</body>
</html>`
    response.set({ 'Content-type': 'text/html' })
    response.send(html)
})
// { num1: 12, num2: 78} ->90
app.post('/calc-sum', function (req, res) {
 const sum = req.body.num1 + req.body.num2  
    res.status(200).json(sum)
})
try {
await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000, () => console.log('сервер запущен'))
} catch (err) {
    console.log('ошибка')
}