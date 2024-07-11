const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.json());

app.get('/vendors', (req, res) => {
    // Logic to fetch vendors
    res.send({ vendors: [] });
});

app.listen(PORT, () => {
    console.log(`Vendor Service running on port ${PORT}`);
});
