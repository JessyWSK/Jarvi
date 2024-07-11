const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/auth/login', async (req, res) => {
    try {
        const response = await axios.post('http://auth-service:3001/login', req.body);
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
});
