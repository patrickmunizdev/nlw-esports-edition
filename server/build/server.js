import express from 'express';
const app = express();
app.get('/ads', (request, response) => {
    return response.json({ 'result': true });
});
app.listen(3000);
