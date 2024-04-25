const express = require('express');
const app = express();
const router = require('./routes/routes.js');
const port = process.env.PORT ?? 4040;

app.disable('x-powered-by');
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})