import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import { UserService } from './services/user-service.js'

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

app.post('/create-user', async function (req, res) {
    await UserService.create(req.body)
    res.sendStatus(200)
})

app.get('/get-all-users', async function (req, res) {
    const users = await UserService.getAllUsers()
    res.status(200).json(users)
})

try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Успешно подключено')

    app.listen(3000, () => console.log('Сервер запущен'))
} catch (err) {
    console.log('ОШИБКА')
}