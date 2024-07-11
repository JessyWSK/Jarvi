const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

app.get('/users', (req, res) => {
    // Logic to fetch users
    res.send({ users: [] });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
