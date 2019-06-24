const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'englishCourse')));
app.get('*', (req, res)=>res.sendfile(__dirname + 'englishCourse/index.html'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));