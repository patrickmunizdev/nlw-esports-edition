import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    return response.json({'result': true, 'teste': 5})
})

app.listen(3000);