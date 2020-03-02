const express = require('express');

const app = express();

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json({ idade: req.body });
});

app.listen(1234);