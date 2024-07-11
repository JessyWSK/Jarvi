const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Authentication logic here
    res.send({ message: 'User authenticated', token: 'dummy-token' });
});

app.listen(PORT, () => {
    console.log(`Auth Service running on port ${PORT}`);
});
