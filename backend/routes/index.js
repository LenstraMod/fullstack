const express = require('express');
const app = express();
const port = 3030;

app.listen(port,() => {
    console.log(`Server live on port http://localhost:${port}`)
})

