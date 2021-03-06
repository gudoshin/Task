const express = require('express');
const app = express();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller')
const PORT = 4000

db.sync();
app.use(require('body-parser').json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(PORT , function() {
    console.log(`App is listening on ${PORT}`);
})