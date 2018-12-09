const express = require('express')
const app = express()  // execute express
const PORT = 4000;

const handleListening = () => {
    console.log(`Listening on http://localhost:${PORT}`)
}

app.listen(PORT, handleListening);