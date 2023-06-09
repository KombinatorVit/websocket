const express = require('express')
const app = express()

const PORT = 5001

const http = require('http').Server(app)
const cors = require('cors')
const socketIO = require('socket.io')(http, {
    cors: {origin: 'http://localhost:5173'}
})

app.get('api', (reg, res) => {
    res.json({message: 'Hello'})
})

socketIO.on('connection', (socket) => {
    console.log(`${socket.id} user connected`)
    socket.on('disconnect', () => {
        console.log(`${socket.id} disconnect `)
    })
})

http.listen(PORT, () => {
    console.log('Server working')

})